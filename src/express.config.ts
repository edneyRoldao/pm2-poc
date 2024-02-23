import https from 'https'
import * as fs from 'fs'
import * as path from 'path'
import express from 'express'
import { Express } from 'express-serve-static-core'

// routes
import addressRouter from './address.route'

export default class ExpressServer {

    private readonly PORT: any
    private readonly app: Express

    constructor() {
        this.app = express()
        this.PORT = process.env.PORT || 3000
    }

    configurer(): ExpressServer {
        console.log('configurando express')
        
        this.app.use(express.json())
        return this
    }

    routesRegistry(): ExpressServer {
        console.log('configurando rotas')

        this.app.use('/api', addressRouter)
        return this
    }

    startServer(): void {
        console.log('iniciando servidor')

        this.app.listen(this.PORT, () => {
            console.log('Server is working on port:', this.PORT)      
        })
    }

    startSSLServer(): void {
        console.log('configurando SSL certificate')

        const server = https.createServer({
            key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
        }, this.app)

        server.listen(this.PORT, () => {
            console.log('>>> SSL Server is working on port:', this.PORT)          
        })
    }

}
