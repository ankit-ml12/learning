#### middleware

> Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

---

### Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

---

### example

```js
const express = require('express')
const app = express()

//if we are not returning anything from middleware we should pass the next function
//express pass the req, res, next we don't need to pass them in middleware

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}
app.get('/', logger, (req, res) => {
  res.send('Home Page')
})
app.get('/about', logger, (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('server is listening')
})
```

---

### import/ export

- we can export and import this code anywhere in the code like this

```js
const express = require('express')
const app = express()

const logger = require('./looger')
app.get('/', logger, (req, res) => {
  res.send('Home Page')
})
app.get('/about', logger, (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('server is listening')
})
```
