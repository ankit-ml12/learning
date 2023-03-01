//
// In computer programming, event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or message passing from other programs or threads.

const EventEmitter = require('events')
const customEmitter = new EventEmitter()

/*
//basic setup
//two parameter one is for name of event and second is callback function
customEmitter.on('response', () => {
  console.log('data received')
})
customEmitter.emit('response')
//output received
*/

/*
// addition info
//we can set and run multiple event
//order matter
//we can pass argument also during calling

customEmitter.on('response', (name, age) => {
  console.log(`${name} is ${age} year old`)
})
customEmitter.on('response', () => {
  console.log('data received')
})
customEmitter.emit('response', 'ankit', 34)
//ankti is 34 year old
// data received

*/
//even if you are not setting event emmitter there are some build in module which uses this event mechenism like server setting
// to learn more about it use this link https://nodejs.org/api/events.html
