import ExpressServer from './express.config'

const server = new ExpressServer()

server
    .configurer()
    .routesRegistry()
    .startServer()
