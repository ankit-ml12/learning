#### useRef

- it create a mutable variable which will not rerender the variable
- DOES NOT TRIGGER RE-RENDER
- preserves the value between renders
- or we can say the get only once obj is rendered
- target DOM nodes/elements
  -when you import react icon also need to import the react
  -for better understandnig use below ex

```js
import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  // console.log(refContainer)

  // useEffect(() => {
  //   console.log(refContainer)
  // })
  const handleSubmit = (e) => {
    e.preventDefault()
    //this give us the the form element and we can edit it
    const name = refContainer.current.value
    console.log(name)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
```

- we use to play and pass the video player
