### ex of another custom hook

```js
//hook component
import { useState, useEffect } from 'react'
import React from 'react'

const useFetch = (defaultValue) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(defaultValue)
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const user = await resp.json()
        setUser(user)
      } catch (error) {
        setIsError(true)
        // console.log(error);
      }
      // hide loading
      setIsLoading(false)
    }
    fetchUser()
  }, [])
  // order matters
  // don't place user JSX before loading or error

  return { isLoading, isError, user }
}

export default useFetch


//file before hook
import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const FetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const user = await resp.json()
        setUser(user)
      } catch (error) {
        setIsError(true)
        // console.log(error);
      }
      // hide loading
      setIsLoading(false)
    }
    fetchUser()
  }, [])
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default FetchData


//after hook
import { useEffect, useState } from 'react'
import useFetch from './useFetch'
const url = 'https://api.github.com/users/QuincyLarson'

const FetchData = () => {
  const { isLoading, isError, user } = useFetch(url)

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default FetchData



```
