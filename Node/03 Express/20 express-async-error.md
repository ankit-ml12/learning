#### express async error

- before this lecture we are using async wrapper, custome error handler, custom error class which is time consuming and hectic So to prevent from that we use express async error package

- now only need to write small code
- we don't to write async wrapper and try and catch

```js
// controller task
const errorHandlerMiddleware = async (err, req, res, next) => {
  return res.status(500).json({ msg: `err: err.msg` })
}

module.exports = errorHandlerMiddleware

// middleware to handle error
const getAllProductsStatic = async (req, res) => {
  throw new Error('testing asynk error')
}
```
