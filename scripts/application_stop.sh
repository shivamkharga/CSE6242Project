#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
killall -s KILL node -q || echo 'no node process was running'