const http = require('http')

//with createserver method we use callback
//basic setup
// const server = http.createServer((req, res) => {
//   res.write('welcome to home page')
//   res.end()
// })

//using req
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('hello ankit at home')
    return
    //we use return to stop the further moverment
  }
  if (req.url === '/about') {
    res.end('hello ankit at about')
    return
  }

  res.write('welcome to home page')
  res.end()
})

server.listen(5000)
