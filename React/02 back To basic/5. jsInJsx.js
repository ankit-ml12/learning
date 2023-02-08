//if you want to use javascript in jsx
// you can write only which statement which return something
const auth = 'ankit patidar'
const Authore = () => {
  return <h4>{auth.toUpperCase()}</h4>
}
//value inside must be an expression (return value), can't be a statement
