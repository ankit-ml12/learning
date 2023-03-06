#### mongooes setup

- this help us to send and receive data from mongodb in specific way
- we have to change two thing one is password and another is detabase name

```js
const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://ankit_ml12:<password>@nodeexpresscourse.jbkuhx2.mongodb.net/databasename?retryWrites=true&w=majority'

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('connected to the db...')
  })
  .catch((err) => {
    console.log(err)
  })
```

- after this just need to import this in app.js this will give connected to the db ...
- other wise you will get error

---

- we will invoke this connectDB inside the app.js so if we are unable to connect to database we can kill the process
- and also use .env to store and pass url

```js
const connectDB = require('./db/connect')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
  try {
    await connectDB(MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
```
