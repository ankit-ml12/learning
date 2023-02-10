import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  // use can use any one useEffect or React.useEffect(without import)
  const [value, setValue] = useState(0)
  //to use useeffect you have to pass callback function
  useEffect(() => {
    console.log('use Effect')
    document.title = `NewTitle(${value})`
  })
  //this useEffect function run everytime when you rerender component

  //useEffect do 2 thing
  //1 preserved the value between the render
  //2. trigger at every rerender
  return (
    <>
      <h1>{value}</h1>;
      <button className="btn" onClick={() => setValue(value + 1)}>
        IncreaseMe
      </button>
    </>
  )
}

export default UseEffectBasics// so we use useEffect when we want side effect or change something outside the component
//why we need :- if we use function to update the value then it may cause infinite loop to prevent that we use use effect

`
useEffect is a hook in React that allows you to perform side effects in function components.There is no need for urban dictionary - basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

useEffect hook
accepts two arguments (second optional)
first argument - cb function
second argument - dependency array
by default runs on each render (initial and re-render)
cb can't return promise (so can't make it async)
if dependency array empty [] runs only on initial render
`
