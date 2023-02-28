const { readFile, writeFile, read } = require('fs')

// TO read and write file asynchronously we need to pass call back function
//three parameter
//1 filename, 2  utf code(other wise it give buffer) 3(err, result ) with callback function

readFile('./path/file.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('result1 ', result)
  const fir = result

  readFile('./path/file2.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('result2 ', result)
    const sec = result
    writeFile('./path/second.txt', `${fir} + ${sec}`, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      return result
    })
  })
})
