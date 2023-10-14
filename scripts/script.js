import { BankQueue } from "./BankQueue.js";
import { BankOperation } from "./BankOperation.js";
import { OperationType } from "./BankOperation.js";

function GetRandomOperationType() {
    const operationTypes = Object.values(OperationType);
    const randomIndex = Math.floor(Math.random() * operationTypes.length);
    const randomOperationType = operationTypes[randomIndex];

    // console.log(`aloo ${randomOperationValue}`);
    return randomOperationType;
}

console.log('program start');

const bankOperations = [];
const numBankOperations = 8
for (let i = 0; i < numBankOperations; i++) {
    const bankOperation = new BankOperation(GetRandomOperationType(), false);
    bankOperations.push(bankOperation);
}

const bankQueue = new BankQueue(2, false, bankOperations);
bankQueue.StartHandleBankOperations();

