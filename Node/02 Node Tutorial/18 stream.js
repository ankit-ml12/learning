// Stream
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −

// Readable − Stream which is used for read operation.

// Writable − Stream which is used for write operation.

// Duplex − Stream which can be used for both read and write operation.

// Transform − A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −

// data − This event is fired when there is data is available to read.

// end − This event is fired when there is no more data to read.

// error − This event is fired when there is any error receiving or writing data.

// finish − This event is fired when all the data has been flushed to underlying system.

//till yet we learn how to read and write data using sync and async method but this methode first read then whole data then only they return
//but let suppose if data is very big then this is not good way to do sharing of data so we use stream
// and some time it also give error you can not place very big data in string (memory limit)

//we write code like this
const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
//read more about it here
//https://nodejs.org/api/stream.html#:~:text=A%20stream%20is%20an%20abstract,stdout%20are%20both%20stream%20instances.

//or like this
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
