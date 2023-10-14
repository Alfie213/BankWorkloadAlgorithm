import { BankQueue } from "./BankQueue.js";
import { BankOperation } from "./BankOperation.js";

console.log('program start');

const bankOperations = [];
const numBankOperations = 8
for (let i = 0; i < numBankOperations; i++) {
    const bankOperation = new BankOperation()
}

const bankQueue = new BankQueue(4, 2);
bankQueue.StartHandleBankOperations();
