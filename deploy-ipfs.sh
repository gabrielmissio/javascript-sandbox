#!/bin/bash

if [ ! -e ${HOME}/.ipfs/api ]
then
    echo "IPFS not started"
    echo "Run 'ipfs daemon' and try again"
else
    echo "IPFS already started"
    ipfs add -r src
fi
