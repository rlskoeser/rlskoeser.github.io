#!/usr/bin/env python

import argparse
from collections import defaultdict
import json
import requests
from urllib.parse import urlparse


def fetch_mentions():
    # get these from config file
    domain = 'rlskoeser.github.io'
    token = 'z7GVt5ozMItgcuqjLQ-Alg'
    webmention_api_url = 'https://webmention.io/api/mentions'

    link_data = defaultdict(list)

    page = 0
    while True:
        print('getting page %s' % page)
        response = requests.get(webmention_api_url, params={
            'domain': domain, 'token': token, 'perPage': 50, 'page': page
        })
        data = response.json()
        # stop iterating over api results when we run out of links
        if not data['links']:
            break

        # iterate over mentions and store
        for mention in data['links']:
            target_url = urlparse(mention["target"])
            site_section = target_url.path.strip('/').split('/')[0] or 'home'
            print('%s; section %s' % (mention["target"], site_section))
            link_data[site_section].append(mention)


        page += 1

    for section in link_data.keys():
        print(section)
        with open('assets/json/webmentions/%s.json' % section, 'w') as outfile:
            json.dump(link_data[site_section], outfile, indent=4)


    # https://webmention.io/api/mentions?domain=rlskoeser.github.io&token=&perPage=20&page=7


if __name__ == '__main__':
    print('main')
    parser = argparse.ArgumentParser(description='Do WebMentions stuff')
    parser.add_argument('mode', choices=['fetch'],
        help='fetch mentions')
    args = parser.parse_args()
    print(args)
    if args.mode == 'fetch':
        fetch_mentions()

