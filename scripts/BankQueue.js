import { BankOperation, OperationType } from "./BankOperation.js";

export class BankQueue {
    constructor(startNumBankOperations, numBankWindows) {
        this.initializeBankOperations(startNumBankOperations);
        this.initializeBankWindows(numBankWindows);

        // this.startHandleBankOperations();
    }

    initializeBankOperations(numOperations) {
        this.currentNumOfBankOperations = numOperations;
        this.bankOperations = [];

        for (let i = 0; i < this.currentNumOfBankOperations; i++) {
            const bankOperation = new BankOperation(GetRandomOperationType());
            this.bankOperations.push(bankOperation);
        }
    }

    initializeBankWindows(count) {
        this.numBankWindows = count;
        this.bankWindows = [];
    }

    StartHandleBankOperations() {
        for (let i = 0; i < this.numBankWindows; i++) {
            this.bankWindows.push(this.bankWindow(Math.floor(Math.random() * 10000), GetRandomOperationType(), this.onBankWindowFinished()));
        }
    }

    async bankWindow(id, bankOperation, callback){ // Coroutine
        console.log(`bankWindow ${id} начал выполнение и закончит через ${bankOperation}`);
        await new Promise((resolve) => setTimeout(resolve, bankOperation)); // Имитация асинхронной операции
        console.log(`bankWindow ${id} завершил выполнение`);
        callback();
    }

    onBankWindowFinished(id) {
        console.log('onBankWindowFinished');
    }
}

function GetRandomOperationType(){
    const operationValues = Object.values(OperationType);
    const randomIndex = Math.floor(Math.random() * operationValues.length);
    const randomOperationValue = operationValues[randomIndex];

    console.log(`aloo ${randomOperationValue}`);
    return randomOperationValue;
}