#!/bin/sh

dir=$(dirname $0)

. $dir/db/drop.sh
. $dir/db/create.sh
. $dir/seed/users.sh
. $dir/seed/questions.sh
