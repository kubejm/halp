#!/bin/sh

docker-compose exec backend yarn workspace backend db:seed
