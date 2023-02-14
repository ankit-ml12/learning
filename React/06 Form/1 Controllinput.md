#### controll input of form

```js
import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h4>Controlled input</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-lable">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  )
}
export default ControlledInputs
```

#### Note

- to handel submit button avoid using onclick on submit
- use onSubmit on form tag
