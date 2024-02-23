module.exports = {
    apps: [
        {
            name: 'pm2-poc',
            script: 'dist/src/main.js',
            watch: false,
            instances: 1,
            exec_mode: 'cluster',
            env: {
                PORT: 4200,
                APP_ENV: 'production'
            },
        }
    ]
}
