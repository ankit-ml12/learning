#### Performance

When Component Re-Renders :

- When the component's state or props change, React will re-render the component to reflect these changes.
- When the parent element re-renders, even if the component's state or props have not changed.
- lower state
- so we use different methode to protect our program of rerendering again and again

### Lower State

- it is one way to avoid rerendering we move out out section from main component into lower state means another child component
- in this we have to shift useState methode to prevent that we use memo methode

#### React.memo()

React.memo is a higher-order component (HOC) in React that allows you to memoize a component. This means that if the input props to the component have not changed, the memoized component will return the same result from the previous render, instead of re-rendering. This can help improve performance by avoiding unnecessary render cycles.

The React.memo function takes a functional component as its argument and returns a new component that has the same behavior, but with the added optimization of checking if the props have changed. If the props have not changed, the memoized component will return the cached result from the previous render.

Here's an example of using React.memo

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* render logic */
})
```

-now above component only render when there is change in state of any state varibale that is used in this component

- in case if some function is comming from another component and if that component is rendering that child is also render even in case of memo function

---

React.memo(Component) - returns memoized component

#### UseCallback

The useCallback hook is a hook in React that allows you to memoize a function. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application. The function will only be re-created if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies change.

Here is an example of how you might use useCallback:

```js
import React, { useCallback, useState } from 'react'

function MyComponent() {
  const [data, setData] = useState([])
  const handleClick = useCallback(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
```

In this example, the handleClick function is memoized using useCallback and the data prop is passed as a dependency. This means that the handleClick function will only be re-created if the data prop changes.

#### useCallback - Common Use Case

```js
import Final from './tutorial/02-useEffect/final/04-fetch-data'
```

```js
import { useState, useEffect, useCallback } from 'react'
const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  // rest of the logic
}
```

#### useMemo

The useMemo hook is a hook in React that allows you to memoize a value. It takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies. The hook will return the memoized value that will only change if one of the values in the dependency array changes.

By memoizing a value, you can avoid unnecessary calculations and improve the performance of your React application. The value will only be recalculated if one of its dependencies changes, otherwise the same instance of the value will be returned. This can be useful in situations where you have an expensive calculation that you only want to recompute when its dependencies change.

Here is an example of how you might use useMemo:

```js
import React, { useMemo } from 'react'

function MyComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map((item) => item.toUpperCase())
  }, [data])

  return (
    <div>
      {processedData.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
```

In this example, the processedData value is memoized using useMemo and the data prop is passed as a dependency. This means that the processedData value will only be recalculated if the data prop changes.

- create slowFunction file
- setup a function
- import in index.js and set it equal to a value

```js
const slowFunction = () => {
  let value = 0
  for (let i = 0; i <= 1000000000; i++) {
    value += i
  }
  return value
}

export default slowFunction
```

#### useTransition

- useTransition is a React Hook that lets you update the state without blocking the UI.
- with the help of useTransition we avoid some not important thing to render instently

```js
import { useState, useTransition } from 'react'
const LatestReact = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setText(e.target.value)

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        )
      })
      setItems(newItems)
    })
  }
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        'Loading...'
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
    </section>
  )
}
export default LatestReact
```

#### Suspense API

The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.

Here is an example of how you might use the Suspense API:

```js
import React, { lazy, Suspense } from 'react'

const DataComponent = lazy(() => import('./DataComponent'))

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  )
}
```

```js
import { useState, useTransition, lazy, Suspense } from 'react'
const SlowComponent = lazy(() => import('./SlowComponent'))
const LatestReact = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()
  const [show, setShow] = useState(false)
  const handleChange = (e) => {
    setText(e.target.value)

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        )
      })
      setItems(newItems)
    })
  }
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        'Loading...'
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
      <button onClick={() => setShow(!show)} className="btn">
        toggle
      </button>
      {show && (
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  )
}
export default LatestReact
```
