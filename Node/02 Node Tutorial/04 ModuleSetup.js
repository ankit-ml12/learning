// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// we are importing module so we can give any name to them
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
