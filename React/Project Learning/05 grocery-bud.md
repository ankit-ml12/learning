### how to use local storage

- const [list, setList] = useState(getLocalStorage())

````js
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}```
```js
useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])```
````
