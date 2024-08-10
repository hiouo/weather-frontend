import fs from 'fs'
import createServer from './server.js'
import { createServer as createHttpServer } from 'https'

const key = fs.readFileSync('.secrets/example.com+5-key.pem')
const cert = fs.readFileSync('.secrets/example.com+5.pem')

createServer().then(({ app, isTest, isProd }) => {
  if (!isTest) {
    const port = isProd ? 8081 : 8081
    app.listen(port, () => {
      console.log(`service started, port: ${port}`)
    })
    // const server = createHttpServer({ key, cert }, app)
    // server.listen(port, () => {
    //   console.log('server listening on 443')
    // })
  }
})
