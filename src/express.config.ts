import express from 'express'
import { Express } from 'express-serve-static-core'

// routes
import addressRouter from './address.route'

export default class ExpressServer {

    private readonly app: Express
    private readonly PORT: any

    constructor() {
        this.app = express()
        this.PORT = process.env.PORT || 3000
    }

    configurer(): ExpressServer {
        this.app.use(express.json())
        return this
    }

    routesRegistry(): ExpressServer {
        this.app.use('/api', addressRouter)
        return this
    }

    startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log('Server is working on port:', this.PORT);            
        })
    }

}