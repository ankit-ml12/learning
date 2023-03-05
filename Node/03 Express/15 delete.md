#### DELETE METHOD

> we use delete method to delete the item from the arr

```js
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params

  const newPeople = people.filter((person) => person.id !== Number(id))
  res.send(newPeople)
})
```
