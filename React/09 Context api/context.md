#### context api

- let suppose if we want to pass some value or function to some other point or file which is very far from this file then we have to apss them file by file
- but to reduce our work effort we use createContext to send this value to other file
- we do it by using below function but once we pass from Navbar context then we are able to access it thoughout the react tree

```js
//we transfer like this
import React, { createContext, useContext, useState } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

//custom hook
export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar

//we import like this
import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext)
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There {user?.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login </p>
      )}
    </div>
  )
}

export default UserContainer


```
