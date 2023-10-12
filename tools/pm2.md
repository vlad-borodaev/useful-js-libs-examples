```bash
npm install pm2@latest -g

pm2 start index.js --log ./logs/log.txt
pm2 start index.js --watch  --ignore-watch="node_modules"

pm2 start my_script.sh

pm2 start app.py --watch

pm2 start ./some-binary-file -- --port 3000

pm2 restart app_name
pm2 reload app_name
pm2 reload processes.json --only api
pm2 stop app_name
pm2 delete app_name

pm2 stop all
pm2 restart all
pm2 delete all

# List the processes
pm2 list
pm2 ls
pm2 status
# Print process list in raw JSON
pm2 jlist
# Print process list in beautified JSON
pm2 prettylist
# Empty all log files
pm2 flush

# Show logs
pm2 logs --lines 30

# Open monitor panel in terminal and in web
pm2 monit
pm2 plus

# Create ecosystem file
pm2 ecosystem
pm2 start ecosystem.config.js

# Run app in cluster mode
pm2 start app.js -i max

# Setup startup script
pm2 startup
pm2 save

# Scale workers
pm2 scale app_name +3
```