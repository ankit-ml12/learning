// functional approch to change value of use State
import React, { useState } from 'react'

const UseStateCounter = () => {
  const [num, setNum] = useState(0)
  const complexInc = () => {
    setTimeout(() => {
      //setNum(num+1)  it will work only one time in two sec
      //so we use  below method

      //the value we pass in setNum is the prev value of num
      //in case or preState you have to return the value
      setNum((preState) => {
        return preState + 1
      })
    }, 2000)
  }
  return (
    <>
      <h2>Regular counter example</h2>
      <h1>{num}</h1>
      <button className="btn" onClick={() => setNum(num + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setNum(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setNum(num - 1)}>
        Decrease
      </button>
      <h2 style={{ margin: '4rem 0 0 0' }}>Complex counter example</h2>
      <h1>{num}</h1>
      <button className="btn" onClick={() => complexInc()}>
        Increase
      </button>
    </>
  )
}

export default UseStateCounter

// this is also called functional approach to change value of useState
//here we passParameter in the setValue which parameter work as a prev value.
//and return the result that we want
