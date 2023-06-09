### custom error handler

- if we want to send custome error then we create this middleware and import in app.js after all the routes

```js
const errorHandlerMiddleware = (err, req, res, next) => {
  //  return res.status(500).json({ msg: err })
  //we can send our custom error
  return res.status(500).json({ msg: 'something went wrong try again letter' })
}

module.exports = errorHandlerMiddleware
```

- to create error from error location and send to this error handle we do this

```js
const errorHandlerMiddleware = (err, req, res, next) => {
  //  return res.status(500).json({ msg: err })
  //we can send our custom error
  // return res.status(500).json({ msg: 'something went wrong try again letter' })
  return res.status(err.status).json({ msg: err.message })
}

module.exports = errorHandlerMiddleware

//controller
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    const error = new Error('Not Found')
    error.status = 404
    return next(error)
    return res.status(404).json({ msg: `No task found with id ${taskID}` })
  }
  return res.status(200).json({ task })
})
```

- https://expressjs.com/en/guide/error-handling.html#:~:text=This%20default%20error%2Dhandling%20middleware,client%20with%20the%20stack%20trace. go to this article and read about custom error handler and also about writing error handler

### The default error handler

Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.

If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace. The stack trace is not included in the production environment.

Set the environment variable NODE_ENV to production, to run the app in production mode.

When an error is written, the following information is added to the response:

The res.statusCode is set from err.status (or err.statusCode). If this value is outside the 4xx or 5xx range, it will be set to 500.
The res.statusMessage is set according to the status code.
The body will be the HTML of the status code message when in production environment, otherwise will be err.stack.
Any headers specified in an err.headers object.
If you call next() with an error after you have started writing the response (for example, if you encounter an error while streaming the response to the client) the Express default error handler closes the connection and fails the request.

So when you add a custom error handler, you must delegate to the default Express error handler, when the headers have already been sent to the client:

function errorHandler (err, req, res, next) {
if (res.headersSent) {
return next(err)
}
res.status(500)
res.render('error', { error: err })
}
Note that the default error handler can get triggered if you call next() with an error in your code more than once, even if custom error handling middleware is in place.
