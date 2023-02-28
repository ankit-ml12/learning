// GLOBALS  - NO WINDOW !!!! becase there is no browser

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//there is more...
console.log(__dirname)
//Time function are also global function and available
setInterval(() => {
  console.log('hello world')
}, 1000)
