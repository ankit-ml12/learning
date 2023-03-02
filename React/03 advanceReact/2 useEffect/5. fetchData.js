import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUser] = useState([])

  //we can't directly call async function
  const getUser = async () => {
    const response = await fetch(url)
    //during feching we get 404 response then fetch doesn't consider it as a write response and does not cosider as error
    // so to protect that we check if the status or response is not ok
    //then we return or set setLoading as false;
    const users = await response.json()
    setUser(users)
    console.log(users)
  }

  useEffect(() => {
    getUser()
  }, [])
  // allways make sure to pass [] when you rerendering the useState
  // to prevent continuous rerendering

  return (
    <>
      <h2>github Users</h2>;
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={html_url} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
