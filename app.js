const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('hello from my side')
  next()
})

app.use((req, res, next) => {
  console.log('hello form my side too')
  res.send({ key: 'value' })
})

const server = http.createServer(app)

server.listen(3000)
