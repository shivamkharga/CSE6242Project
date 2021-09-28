#!/bin/bash
. $(dirname $0)/constants.sh
service $application_name-$environment stop
#Stop the server application

#Force kill server if something is still running on its port.
pid=lsof -t -i:$server_port
if [ "$pid" != "" ]
then # Kill the running process
kill -9 $pid 2>/dev/null || :
fi

#To remove the current PID file
if [ -e $pid_path ]
then
test -x $DAEMON || exit 0
set -e