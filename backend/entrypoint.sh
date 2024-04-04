#!/bin/sh
set -e

# Start app
python3 -u postgres_script.py
python3 -u main.py