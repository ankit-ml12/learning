### bcryptjs

- we never store user password in string form we first hash that into some cryptographic code using bycrypt and then only store

- install bcryptjs package
- Means we can't store user password in form of string so if some one break access our database then he get info about user database so we decrypt them like this

```js
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { email, name, password } = req.body

  const salt = await bcrypt.genSalt(10)
  // the more the number is the more byte you get and more secure your password is
  // but more processing required
  const hasedPassword = await bcrypt.hash(password, salt)

  const tempUser = { name, email, password: hasedPassword }

  const user = await User.create({ ...tempUser })
  res.status(StatusCodes.CREATED).json({ user })
}
```
