#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
if pgrep npm; then pkill npm fi
