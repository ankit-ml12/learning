### Task Manager API

1. Normal package installation

2. express server setup

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello ankit')
})
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
```

3. route setup and testing in postmen

```js
//app.js
const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})

// route/task.js
const express = require('express')
const router = express.Router()
const {
  getAllTasks,
  creatTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

//one way to set task
// router.get('/', getAllTasks)
// router.post('/', creatTask)
// router.get('/:id', getTask)
// router.patch('/:id', updateTask)
// router.delete('/:id', deleteTask)

//second way to set task
router.route('/').get(getAllTasks).post(creatTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router

/// controller
const getAllTasks = (req, res) => {
  res.send('all items')
}
const creatTask = (req, res) => {
  res.send('post items')
}
const getTask = (req, res) => {
  res.send('get items')
}
const updateTask = (req, res) => {
  res.send('pathc items')
}
const deleteTask = (req, res) => {
  res.send('delter items')
}

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask }
```

4. setup all route in postmen

- we will set the global varibal to this url http://localhost:3000/api/v1/
- to use that global variable in postmen we use {{URL}}

5.  crate model folder for schema and start writing schema for project

- read more about on documetation page

```js
//basic setup
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: String,
  complete: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema)
```

```js
//upgread to
//advance setup
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more then 20 character'],
  },
  complete: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
```

6. after we set every api request in controller

```js
const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ size: task.length, task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const creatTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    console.log(task)
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` })
    }
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    //we pass third parameter to update the return task value and run the validator from the schema
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    console.log(task)
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` })
    }
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findByIdAndDelete({ _id: taskID })
    console.log(task)
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` })
    }
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask }
```

6. after that we use app.use()after all the route on app.js and set app.use(notfound)

7. set async wrapper middleware and wrape every try and catch inthe controller

```js
//async error like this
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
module.exports = asyncWrapper

//controller code refractor to
const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({})
  res.status(200).json({ size: task.length, task })
})

const creatTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return res.status(404).json({ msg: `No task found with id ${taskID}` })
  }
  return res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  //we pass third parameter to update the return task value and run the validator from the schema
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return res.status(404).json({ msg: `No task found with id ${taskID}` })
  }
  return res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findByIdAndDelete({ _id: taskID })
  if (!task) {
    return res.status(404).json({ msg: `No task found with id ${taskID}` })
  }
  return res.status(200).json({ task })
})

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask }
```

8. custom error handler in express (read more about it on express)

- if we want to send custom error then we create this middleware and import in app.js after all the routes

```js
const errorHandlerMiddleware = (err, req, res, next) => {
  //  return res.status(500).json({ msg: err })
  //we can send our custom error
  return res.status(500).json({ msg: 'something went wrong try again letter' })
}

module.exports = errorHandlerMiddleware
```

9. custom error class to sent the custom error of any type

- he we again refactor out code

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

10. at the end we reach to this stage

```js
//controller
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404))
  }
  return res.status(200).json({ task })
})

//error/custom-error.js

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

module.exports = { createCustomError, CustomAPIError }

//ERROR HANDLER
const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: `something went wrong please try again` })
}

module.exports = errorHandlerMiddleware
```

11. this is only for understanding in future we will use some package to make this work easy
