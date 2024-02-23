import ExpressServer from './express.config'

const env = process.env.APP_ENV
const server = new ExpressServer()


if (!!env && env =='production') {
    server
        .configurer()
        .routesRegistry()
        .startSSLServer()

} else {
    server
        .configurer()
        .routesRegistry()
        .startServer()
}
