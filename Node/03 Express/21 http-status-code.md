#### Error end stage

- create error folder
- create index.js, bed-request.js, customError.js, unauthorization.js

> first write this three file like this

```js
//custom error
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError

// bad request
const customAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')
class BadRequest extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest

// unauthorization
const customAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class Unaunthenticated extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = Unaunthenticated
```

---

- import all three in index.js in same folder

```js
const customAPIError = require('./custom-error')
const BadRequestError = require('./bad-request')
const UnaunthenticatedError = require('./unaunthenticated')

module.exports = { customAPIError, BadRequestError, UnaunthenticatedError }
```

---

- And inside middle ware set this file to handle all other error

```js
const { customAPIError } = require('../errors')

const { StatusCode, StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
```

---

- now to show error we just need to import the file and show add line like this

```js
throw new BadRequestError('Email or Password is missiong')
throw new UnaunthenticatedError('No token is provided')
throw new UnaunthenticatedError('Not authorized to access this route')
```
