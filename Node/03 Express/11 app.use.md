### app.use() middleware

```js
const express = require('express')
const app = express()
const logger = require('./looger')

//let suppose now if i want to use this logger function in every path
//to do that we use app.use and pass this logger function

app.use(logger)

//now we don't need to pass the logger function into every method

// what is want to show logger only and only specific path
//then we have to pass the second parameter
//app.use('/about', logger) it will work only and only '/about' path
//the order or app.use() matter

app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('server is listening')
})
```

### multiple middleware

> if there are multiple middle ware we want to use we need to pass then in arr in app.use()
> like app.use([logger, author])
> then order of working of middler is depend on the order of their position in arr
> we can also pass multiple middleware inside the method itself in the array

---

- some part is remaining we read letter
