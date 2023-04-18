- [Morgan Package](https://www.npmjs.com/package/morgan)

- we use above path inorder to excess package.

- [validator] packege
- to write line to validate schema things

```js
 validate: {
      validator: validator.isEmail,
      message: 'please provide valid email',
},
```

- to update user we have two method one is by find one and update
- and antoher is using = method like this
  user.name = name
  user.email = email
  and user.save();

but remeber this user .save method create issue because is pass through the pre save password method and it again hash and update the password so my password will changes.
to remove this issue we need to check this condition and if does not change then return the method from the pre save password method
like this

```js
UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
```

```js
//to give 1 review by user per 1 product
ReviewSchema.index({ product: 1, user: 1 }, { unique: true })
```
