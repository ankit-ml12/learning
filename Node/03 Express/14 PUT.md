#### PUT METHOD

> USE TO UPDATE VALUE OF ALLREADY EXIST DATA

```js
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  //handel error letter
  people[id].name = name
  res.send(people)
})
app.listen(5000, () => {
  console.log('server is listening')
})
```
