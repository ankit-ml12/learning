#### Custom hooks

- same rules as regular hooks
- simplify component (less code)
- re-use functionality

---

- useToggle is a hook that we create

```js
import { useState } from 'react'
import React from 'react'

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue)

  const toggle = () => {
    setShow(!show)
  }

  return { show, toggle }
}

export default useToggle
```

---

- it convert that the below code to the last code

```js
//without custom hook
import { useState } from 'react'

const ToggleExample = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  )
}
export default ToggleExample
```

---

- with custome hook toggle

```js
import useToggle from './usetoggle'

const ToggleExample = () => {
  const { show, toggle } = useToggle(true)
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  )
}
export default ToggleExample
```
