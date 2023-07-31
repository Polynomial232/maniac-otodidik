const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    })

    await server.register(require('@hapi/inert'))

    server.route(routes)

    await server.start()

    console.log(`server running: ${server.info.uri}`)
}

module.exports = { init }