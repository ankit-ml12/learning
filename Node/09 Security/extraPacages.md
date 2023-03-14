#### helmet

- Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

#### Cors

- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- allows cross origin resource sharing

#### xss clean library

- Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params. Works with Express, Restify, or any other Connect app.

#### express rate limit

- Sponsored by Zuplo a fully-managed API Gateway for developers. Add dynamic rate-limiting, authentication and more to any API in minutes. Learn more at zuplo.com

```js
// npm i express-rate-limit xss-clean cors helmet
//import all of them and use like this
//extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15 min
    max: 100, //limit each ip to 100 request per windowsMs
  })
)
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
```
