import React, { useState, useEffect } from 'react'
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  // if i do not pass any argument inside the useEffect then it render every time when component render

  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  })
  // if we pass [] empty array then it render only one time
  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  }, [])
  //but if i pass some specific value then it render every time when the value of the second argument is changed
  //remember you can use more then one useEffect
  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  }, [value])

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
