#!/bin/bash

if sudo docker ps --filter name=not-portfolio | grep not-portfolio; then
	sudo docker stop not-portfolio
	sudo docker rm not-portfolio
fi
sudo docker compose up -d
