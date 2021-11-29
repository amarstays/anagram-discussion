#!/bin/bash
isExistApp = `pgrep node`
if [[ -n  $isExistApp ]]; then
    service node stop        
fi

