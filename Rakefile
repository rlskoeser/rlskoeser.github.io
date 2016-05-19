# == Dependencies ==============================================================

# adapted from https://github.com/gummesson/jekyll-rake-boilerplate


require 'rake'
require 'yaml'
require 'fileutils'
require 'pathname'
require 'optparse'
require 'rest-client'
require 'json'


# Load the configuration file
CONFIG = YAML.load_file("_config.yml")

# Get and parse the date
# DATE = Time.now.strftime("%Y-%m-%d")
# TIME = Time.now.strftime("%H:%M:%S")
TODAY = DateTime.now
DATE_STR = Time.now.strftime("%Y-%m-%d")
TIME = Time.now
TIME_STR = TIME.strftime("%H:%M:%S")
POST_TIME = TODAY.strftime('%Y-%m-%d %H:%M:%S %:z')

# Directories
POSTS = "_posts"
DRAFTS = "_drafts"
UPDATES = Pathname.new("_updates")

# == Helpers ===================================================================

# Execute a system command
def execute(command)
  system "#{command}"
end

# Save the file with the title in the YAML front matter
def write_file(content, title, directory, filename)
  parsed_content = "#{content.sub("title:", "title: \"#{title}\"")}"
  parsed_content = "#{parsed_content.sub("date:", "date: #{POST_TIME}")}"
  File.write("#{directory}/#{filename}", parsed_content)
  puts "#{filename} was created in '#{directory}'."
end

# Create the file with the slug and open the default editor
def create_file(directory, filename, content, title, editor)
  FileUtils.mkdir(directory) unless File.exists?(directory)
  if File.exists?("#{directory}/#{filename}")
    raise "The file already exists."
  else
    write_file(content, title, directory, filename)
    if editor && !editor.nil?
      sleep 1
      # open file in configured editor
      execute("#{editor} #{directory}/#{filename}")

      # add to git, commit, and push
      execute("git add #{directory}/#{filename}")
      execute("git commit #{directory}/#{filename}")
      execute("git push")
      sleep 10   # is this enough for github pages to build the site?
      published_url = public_update_url(directory, title)
      puts "published_url = #{published_url}"

      # publish on twitter
      twitter_url = publish_to_twitter(published_url)
      # add twitter url to update file front matter
      add_twitter_url("#{directory}/#{filename}", twitter_url)
      execute("git commit #{directory}/#{filename} -m 'Added published twitter url'")
    end
  end
end

def public_update_url(directory, title)
   "#{CONFIG["public_url"]}/#{String(directory).gsub('_', '')}/#{transform_to_slug(title)}/"
end


def publish_to_twitter(source_url)
  # publish to twitter via bridgy web mention
  # parse the response and return the created twitter url
  publish_url = 'https://brid.gy/publish/webmention'
begin
  RestClient.get 'http://example.com/resource'
rescue => e
  e.response
end

  begin
    r = RestClient.post(publish_url, {
      source: source_url,
      target: 'http://brid.gy/publish/twitter',
      bridgy_omit_link: CONFIG["update"]["bridgy_omit_link"]})
  rescue => e
    puts JSON.parse(e.response)["error"]
    puts 'Bridgy publish failed'
    exit 1
  end

  twitter_url = JSON.parse(r.body)["url"]
  puts "Published tweet url is #{twitter_url}"
  return twitter_url
end

def add_twitter_url(filename, url)
  text = File.read(filename)
  updated_text = text.gsub(/^twitter_url:/, "twitter_url: #{url}")
  # To write changes to the file, use:
  File.open(filename, "w") {|file| file.puts updated_text }
end

# Read the template file
def read_file(template)
  File.read(template)
end

# Chech the title
def check_title(title)
  if title.nil? or title.empty?
    raise "Please provide a title for your file."
  end
end

# Transform the filename and date to a slug
def transform_to_slug(title)
  characters = /("|'|!|\?|:|\s\z)/
  whitespace = /\s/
  title.gsub(characters,"").gsub(whitespace,"-").downcase
end

# == Tasks =====================================================================

# rake update["name"]
desc "Create an update in _updates"
# task :update, :name do |n, args|
task :update do |args|
    options = {}
    OptionParser.new(args) do |opts|
      opts.banner = "Usage: rake update [options]"
      opts.on("-t", "--title {title}","Post short title for update filename", String) do |title|
        options[:title] = title
      end
    end.parse!
    # title is required
    check_title(options[:title])

    template = CONFIG["update"]["template"]
    extension = CONFIG["update"]["extension"]
    editor = CONFIG["editor"]
    filename = "#{transform_to_slug(options[:title])}.#{extension}"
    content = read_file(template)
    directory = UPDATES.join(TODAY.strftime('%Y'), TODAY.strftime('%m'), TODAY.strftime('%d'))
    create_file(directory, filename, content, options[:title], editor)
    # quit so rake doesn't try to do something else with the -t option
    exit 0
end

desc 'Publish an existing update (for now, assumes update is from today)'
task :publish do |args|
    options = {}
    OptionParser.new(args) do |opts|
      opts.banner = "Usage: rake update [options]"
      opts.on("-t", "--title {title}","Short title or label filename", String) do |title|
        options[:title] = title
      end
    end.parse!
    # title is required
    check_title(options[:title])

    extension = CONFIG["update"]["extension"]
    filename = "#{transform_to_slug(options[:title])}.#{extension}"
    # for now, assume today
    directory = UPDATES.join(TODAY.strftime('%Y'), TODAY.strftime('%m'), TODAY.strftime('%d'))

    # TODO: consolidate with logic in create_file

    # calculate published url
    published_url = public_update_url(directory, options[:title])
    # publish on twitter
    twitter_url = publish_to_twitter(published_url)
    # add twitter url to update file front matter & commit to git
    add_twitter_url("#{directory}/#{filename}", twitter_url)
    execute("git commit #{directory}/#{filename} -m 'Added published twitter url'")

    # quit so rake doesn't try to do something else with the -t option
    exit 0
end

# retweet command? create the template, grab the o-embed and insert
# into the template

task :repost do |args|
    options = {}

    # hack: shift argv to ignore task name and -- needed
    # to pass args
    ARGV.shift
    ARGV.shift

    OptionParser.new(args) do |opts|
      opts.banner = "Usage: rake update [options]"
      opts.on("-t", "--title {title}","Short title or label for filename", String) do |title|
        options[:title] = title
      end
      opts.on("-u", "--url {url}","URL of item to repost", String) do |url|
        options[:url] = url
      end
    end.parse!
    # title is required
    check_title(options[:title])
    template = CONFIG["update"]["template"]
    extension = CONFIG["update"]["extension"]
    editor = CONFIG["editor"]
    filename = "#{transform_to_slug(options[:title])}.#{extension}"
    content = read_file(template)
    # add the url to the yaml front matter
    content = content.gsub(/^repost_of:/, "repost_of: #{options[:url]}")

    twitter_oembed_url = 'https://api.twitter.com/1/statuses/oembed.json'
    # if repost is a tweet, fetch it and embed
    if options[:url].include? 'twitter.com'
        begin
            r = RestClient.get twitter_oembed_url,
                {:params => {:url => options[:url]}}
            # r = RestClient.get(twitter_oembed_url, {:params => {url: options[:url]}})
            content += "\n" + JSON.parse(r.body)["html"]
        rescue => e
            puts 'Twitter oembed API request error'
            puts e
            exit 1
        end
    end

    directory = UPDATES.join(TODAY.strftime('%Y'), TODAY.strftime('%m'), TODAY.strftime('%d'))
    create_file(directory, filename, content, options[:title], editor)
end
