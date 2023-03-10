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

#### further modifying the error file

```js
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError

const customAPIError = require('./custom-error')
class BadRequest extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 400
  }
}

module.exports = BadRequest

const customAPIError = require('./custom-error')
class Unaunthenticated extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 401
  }
}

module.exports = Unaunthenticated
```

- import all of then in index.js in same folder and then export
