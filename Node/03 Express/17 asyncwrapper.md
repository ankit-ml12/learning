- we write the asyncwrapper to remove async and await from the controller

```js
//asyn wrapper code like this
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
module.exports = asyncWrapper

// remove async and await
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findByIdAndDelete({ _id: taskID })
  if (!task) {
    return res.status(404).json({ msg: `No task found with id ${taskID}` })
  }
  return res.status(200).json({ task })
})
```
