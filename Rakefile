# == Dependencies ==============================================================

# adapted from https://github.com/gummesson/jekyll-rake-boilerplate


require 'rake'
require 'yaml'
require 'fileutils'
require 'pathname'
require 'optparse'


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
      execute("#{editor} #{directory}/#{filename}")
    end
  end
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
def transform_to_slug(title, extension)
  characters = /("|'|!|\?|:|\s\z)/
  whitespace = /\s/
  "#{title.gsub(characters,"").gsub(whitespace,"-").downcase}.#{extension}"
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
    filename = "#{transform_to_slug(options[:title], extension)}"
    content = read_file(template)
    directory = UPDATES.join(TODAY.strftime('%Y'), TODAY.strftime('%m'), TODAY.strftime('%d'))
    create_file(directory, filename, content, options[:title], editor)
    # quit so rake doesn't try to do something else with the -t option
    exit 0
end