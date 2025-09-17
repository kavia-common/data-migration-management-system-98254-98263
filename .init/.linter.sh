#!/bin/bash
cd /home/kavia/workspace/code-generation/data-migration-management-system-98254-98263/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

