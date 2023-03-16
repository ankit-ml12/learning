#### useReducer

- it is lite version of redux
- when there is too many state variable in a project and too many developer working on the same project then it is difficult to manage the useState variable
- where the state managment library come into play

---

- incase of reState we pass the default value
- but in case of use reducer we need to pass two thing
- one is default value and second is the reducer function
- we can also throw an error in reducer using es6 concept

```js
import { useState, useReducer } from 'react'

// default/initial state
const defaultState = {
  people: data,
}
// reducer function
// whatever state is returned from the function is the new state
//by default it rerturn undefine

const reducer = (state, action) => {
  return state
}

// dispatch({type:'SOME_ACTION'}) an action
// handle it in reducer, return new state

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
```

---

-here an example of initial file and file after using reducer

```js
//initial
import React from 'react'
import { data } from '../../../data'
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  )
}

export default ReducerBasics


//after seting up reducer

import React from 'react'
import { data } from '../../../data'
import { useReducer } from 'react'

const defaultstate = {
  people: data,
  // isLoading: false,
}
const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data }
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    )
    return { ...state, people: newPeople }
  } else return state
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultstate)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }
  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
    // setPeople([])
  }
  const resetList = () => {
    dispatch({ type: RESET_LIST })
    // setPeople(data)
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => {
          state.people.length ? clearList() : resetList()
        }}
      >
        {state.people.length ? 'clear items' : 'reset'}
      </button>
    </div>
  )
}

export default ReducerBasics

```
