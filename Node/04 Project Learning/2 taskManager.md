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
