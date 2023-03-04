#### sending json data from express

```js
const express = require('express')
const path = require('path')
const app = express()

const { people, products } = require('./data')

app.get('/', (req, res) => {
  //to send json data or file we use res.json() method
  // res.json([{ name: 'ankit' }, { age: '100' }])
  //we can also send json file here like this
  res.json(products)
})

app.listen(5000, () => {
  console.log('server is listening')
})
```
