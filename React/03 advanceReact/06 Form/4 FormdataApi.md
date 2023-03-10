#### form data api

- we use event.target refer to the dom element which trigger an event
  -but event.currenttarget point to the dom element that event listner listning on.
  - for this it is targeting to form element so it return the form element

#### another way to get multiple value from the form

```js
const handleSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  console.log(formData)
  const Email = formData.get('email')
  console.log(Email)
  // to get all data in the form of array
  console.log([...formData.entries()])

  // to convert into object
  const newUser = Object.fromEntries(formData)
  console.log(newUser)
  setValue(value + 1)

  // to reset every value of the selected field we use
  e.currentTarget.reset()
}
```
