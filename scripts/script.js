// async function myFunction() {
//   console.log('Function called after 5 seconds');
//   await new Promise(resolve => setTimeout(resolve, 5000));
//   console.log('5 seconds have passed');
// }

// myFunction();

// const OperationType = require('./OperationType');
import {OperationType} from './OperationType.js'

function someFunc(){
  let obf = new OperationType(199);
  console.log("im someFunc");
}

someFunc();