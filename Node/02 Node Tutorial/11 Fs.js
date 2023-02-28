const { readFileSync, writeFileSync } = require('fs')
//above module we use to write and read file synchronously

//readFileSync we pass two parameter one for url and second for encoding utf8
const one = readFileSync('./path/file.txt', 'utf8')
const two = readFileSync('./path/file2.txt', 'utf8')
console.log(one, two)

//writeFileSync methode
//if file is there then it override old content
//otherwise it create new one
writeFileSync('./path/result.txt', `here is result: ${one} + ${two}`)
