module.exports = {
    apps: [
        {
            name: 'pm2-poc',
            script: 'dist/src/main.js',
            watch: true,
            ignore_watch: ['node_modules', 'logs', 'tmp'],
            instances: 1,
            exec_mode: 'fork',
            max_memory_restart: '200M',
            env: {
                NODE_ENV: 'production',                
            },
        }
    ]
}
