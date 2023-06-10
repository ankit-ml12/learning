#### Setup React Query

main.jsx

```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
```

#### First Query

Items.jsx

```js
import { useQuery } from '@tanstack/react-query'

const result = useQuery({
  queryKey: ['tasks'],
  queryFn: () => customFetch.get('/'),
})
console.log(result)
```

- Query Key

The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.

- Query Function

A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.

#### Error Handling

```js
const Items = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/something')
      return data
    },
  })

  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>
  }

  // if (isError) {
  //   return <p style={{ marginTop: '1rem ' }}>there was an error...</p>;
  // }
  if (error) {
    return <p style={{ marginTop: '1rem ' }}>{error.message}</p>
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
```

- two way to implement

```js
const { isLoading, data } = useQuery({
  queryKey: ['tasks'],
  queryFn: async () => {
    const { data } = await customFetch.get('/')
    return data
  },
})
// to access the array we use datataskList.map(()=>{})

const { isLoading, data } = useQuery({
  queryKey: ['tasks'],
  queryFn: () => customFetch.get('/'),
})
// to access the array we use data.data.taskList.map(()=>{})
```

#### Thunder Client Extension

Test API endpoints directly in VS CODE
