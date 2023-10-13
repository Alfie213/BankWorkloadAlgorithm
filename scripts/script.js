// async function myFunction() {
//   console.log('Function called after 5 seconds');
//   await new Promise(resolve => setTimeout(resolve, 5000));
//   console.log('5 seconds have passed');
// }

// myFunction();

// const OperationType = require('./OperationType');
// import {BankOperation} from './BankOperation.js'

// function someFunc(){
//   let obf = new BankOperation(199);
//   console.log("im someFunc");
// }

// someFunc();

import { BankQueue } from "./BankQueue.js";

console.log('program start');
const bankQueue = new BankQueue(4, 2);
bankQueue.StartHandleBankOperations();
console.log('program finish');
