#!/bin/bash
# Auto-pull latest build from GitHub and rebuild on Pi
cd /home/code_phile/.openclaw/workspace/portfolio
git pull origin main
npm ci --production=false
npm run build
echo "$(date): Deploy complete" >> /tmp/portfolio-deploy.log
