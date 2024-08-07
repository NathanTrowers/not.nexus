#!/bin/bash

sudo docker stop not-portfolio
sudo docker rm not-portfolio
sudo docker compose -f compose.prod.yaml up -d
