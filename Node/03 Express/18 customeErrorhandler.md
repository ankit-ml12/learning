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

- https://expressjs.com/en/guide/error-handling.html#:~:text=This%20default%20error%2Dhandling%20middleware,client%20with%20the%20stack%20trace. go to this article and read about custom error handler
