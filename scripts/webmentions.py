#!/usr/bin/env python
"""
python script to fetch webmentions and save as data files

mentions are grouped by top-level url portion and saved to files
by group

setup:
- pip install requests
- set webmention api token as environment variable WEBMENTION_API_TOKEN
"""

import argparse
import json
import os
from collections import defaultdict
from datetime import datetime
from urllib.parse import urlparse
from pathlib import Path

import requests


def fetch_mentions():
    domain = "rlskoeser.github.io"
    token = os.environ.get("WEBMENTION_API_TOKEN")
    webmention_api_url = "https://webmention.io/api/mentions"

    webmention_data_dir = Path("data/webmentions/")
    mention_data = defaultdict(list)

    # API results are paginated, with link to next page; iterate until we get to the end
    page = 0
    while True:
        # GET https://webmention.io/api/mentions.jf2?domain=indiewebcamp.com&token=xxxxx&since=2017-06-01T10:00:00-0700
        params = {"domain": domain, "token": token, "perPage": 50, "page": page}
        # NOTE: supports a 'since' parameter to fetch mentions since last check
        response = requests.get(webmention_api_url, params=params)
        data = response.json()
        if data.get("error"):
            print(f"Error: {data['error_description']}")
            raise SystemExit()
        # stop iterating over api results when we run out of links
        if not data.get("links"):
            break

        # iterate over mentions and store
        for mention in data["links"]:
            target_url = urlparse(mention["target"])
            site_section = target_url.path.strip("/").split("/")[0] or "home"
            mention_data[site_section].append(mention)

        # check for next page of results
        page += 1

    for section, mentions in mention_data.items():
        # NOTE: could probably skip home, updates;
        # not currently displaying mentions for tag pages
        print(
            f"Saving {len(mentions)} mention{'' if len(mentions) == 1 else 's'} for {section}"
        )
        section_datafile = webmention_data_dir / f"{section}.json"
        with section_datafile.open("w") as outfile:
            json.dump(mentions, outfile, indent=4)


if __name__ == "__main__":
    fetch_mentions()
