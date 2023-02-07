//os provide methode to interacting with operating system as well as the server

const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//uptime of system in seconds
console.log(os.uptime());
//94556 sec

const currOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currOs);
/*{
  name: 'Windows_NT',
  release: '10.0.22621',
  totalMem: 8362713088,
  freeMem: 543457280
}*/
