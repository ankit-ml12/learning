const path = require('path')
console.log(path.sep)
// \
//join all the thing even you add ./ it work find
const ml = path.join(path.sep, 'path', 'temp', 'content.js')
console.log(ml)
// \10path\temp\content.js

//to know the name of the base file
const base = path.basename(ml)
console.log(base)
//content.js

// to know the absoulte path we use this methode
const abs = path.resolve(__dirname)
const abs2 = path.resolve(__dirname, 'path', 'temp', 'content.js')
console.log(abs)
//C:\Users\patid\OneDrive\Desktop\All projects\learning\Node\02 Node Tutorial
console.log(abs2)
//C:\Users\patid\OneDrive\Desktop\All projects\learning\Node\02 Node Tutorial\path\temp\content.js
