### GET METHOD

- by default method in express in get method

```js
const express = require('express')
const app = express()
const { people } = require('./data')

app.get('/', (req, res) => {
  res.status(200).json({ sucess: true, data: people })
})

app.listen(5000, () => {
  console.log('server is listening')
})
```
