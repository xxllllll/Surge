#!/bin/bash

# TCP forward from local 9983 to 192.0.3.2:9981
/usr/bin/socat TCP4-LISTEN:9983,fork TCP4:192.0.3.2:9981 &

# UDP forward from local 9983 to 192.0.3.2:9981
/usr/bin/socat UDP4-LISTEN:9983,fork UDP4:192.0.3.2:9981 &

wait
