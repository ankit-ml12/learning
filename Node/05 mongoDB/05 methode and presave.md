- if we set all the code inside the controller then it become to large so we shift some operation and some to model

```js
// initial model for auth.js
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide Name'],
    minlength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide Email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please, provide valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    // maxLength: 12,
  },
})

module.exports = mongoose.model('User', UserSchema)

//after that we just insert this line and remove from the controller

//we want to presave our password so we use pre function with userschema
//we use this function instead of arrow function because it scope it to parent element that is not the case with the arrow function
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})
```

### instance in mongoose

```js
//create in model
UserSchema.methods.getName = function () {
  return this.name
}
// this how we access
// res.status(StatusCodes.CREATED).json({ name: { user: user.name }, token })
//other way to get name
res.status(StatusCodes.CREATED).json({ name: user.getName(), token })
```

- another method to create an token

```js
UserSchema.methods.getToken = function () {
  const token = jwt.sign({ userId: this._id, name: this.name }, 'secretkey', {
    expiresIn: '30d',
  })
  return token
}
```
