#!/bin/bash

function backup() {
    local source="$1"
    local destination="$2"
    local gitignorePath="$3"

    if [ -d "$source" &&  -d "$destination" ]; then
        echo "Backing up directory: $source to $destination"
        if [ -f "$gitignorePath" ]; then
            rsync -av --delete --exclude-from="$gitignorePath" "$source/" "$destination/"
        else
            rsync -av --delete "$source/" "$destination/"
        fi
    else
        echo "Either the source directory $source or destination directory $destination does not exist."
    fi
}
