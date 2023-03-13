#### schema

- to create schema we first creade model folder
- and then build schema for each type of data there

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

- we learn more advance in future lecture
- https://mongoosejs.com/docs/queries.html
- learn about mongooes query

---

- WE CAN ALSO assign each created property to user with time

```js
 createby: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide User'],
    },

  {
    timestamps: true,
  }
```
