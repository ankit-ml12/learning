// GLOBALS  - NO WINDOW !!!! becase there is no browser

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//there is mode...
console.log(__dirname);
//Time function are also global function and available
setInterval(() => {
  console.log("hello world"); //C:\Users\patid\OneDrive\Desktop\All projects\learning\Node\02 Node Tutorial
}, 1000);
