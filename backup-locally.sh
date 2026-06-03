#!/bin/bash

destination="$1"

if [ -d "$destination" ]; then
    echo "Backing up directory to $destination"
    if [ -f "./gitignore" ]; then
        rsync -av --delete --include="*/" --exclude-from="./gitignore" "$PWD/" "$destination/"
    else
        rsync -av --delete "$PWD/" "$destination/"
    fi
else
    echo "The destination directory $destination does not exist."
fi
