### axios

- not part of library
- one of the best library for data fetching

#### First Request

- import axios

- axios.get(url)
- axios.post(url)
- axios.patch/put(url)
- axios.delete(ulr)

- default get axios(url)

- returns a promise
- response data located in data property
- error in error.response

### Get request

- normaly this is how we set the get request using try and catch

```js
const fetchData = async () => {
  try {
    const response = await axios(url)
    const data = response.data
    console.log(data)
  } catch (error) {
    console.log('ERROR', error.response)
  }
}

useEffect(() => {
  fetchData()
  console.log('first axios request')
}, [])
```
