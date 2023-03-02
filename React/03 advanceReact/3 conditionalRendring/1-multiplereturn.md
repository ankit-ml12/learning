### **conditional rendering**

```js
import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [name, setName] = useState(true)

  // we can return multiple statement in the return component like this
  if (name) {
    return <h>this is true</h>
  }
  return <h2>multiple returns</h2>
}

export default MultipleReturns
```

---

### **multiple return with fetch data**

```js
import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

  const [people, setPeople] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        const user = await resp.json()
        setPeople(user)
      } catch (error) {
        setErr(true)
        console.log(error)
      }
      setLoading(false)
    }
    fetchUser()
  })
  if (loading) {
    return <h2>Loading Data </h2>
  }
  if (err) {
    return <h2>Erroe in fatching Data </h2>
  }

  return (
    <>
      <img src={people.avatar_url} style={{ width: '150px' }} alt="" />
      <h2>{people.name}</h2>
      <h4>work at {people.company}</h4>
      <p>{people.bio}</p>
    </>
  )
}
export default MultipleReturnsFetchData
```

#### if you access any element from the object and at that place there is nothing then obj return undefine keyword

#### order matter

> if there is multiple return like error, loading , output and you want to destructure some hook to show them in output. So mack sure the order of location where you destructuring the obj metter.
> allways destructure before the output return and after the error and loading
