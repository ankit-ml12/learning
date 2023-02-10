import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //remeber we cannot put hook inside the conditional statement which is wrong
  //but we can put conditionall statement inside the hook this is allowed
  //make sure you use return statement  else valye become undefine
  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  })

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
