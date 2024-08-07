#!/bin/bash

sudo docker stop not-portfolio
sudo docker rm not-portfolio
sudo docker compose up -d
