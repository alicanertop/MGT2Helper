const mgt2 = require('./public/mgt2.json')

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(mgt2)
const middlewares = jsonServer.defaults()

const port = process.env.SERVER_PORT
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running PORT=${port}`)
})