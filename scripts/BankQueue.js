import { BankOperation, OperationType } from "./BankOperation.js";
import { BankWindow } from "./BankWindow.js";

export class BankQueue {
    constructor(startNumBankOperations, numBankWindows) {
        this.initializeBankOperations(startNumBankOperations);
        this.initializeBankWindows(numBankWindows);

        // this.startHandleBankOperations();
    }

    initializeBankOperations(numOperations) {
        this.currentNumOfBankOperations = numOperations;
        this.currentbankOperationsQueue = [];

        for (let i = 0; i < this.currentNumOfBankOperations; i++) {
            const bankOperation = new BankOperation(GetRandomOperationType());
            this.currentbankOperationsQueue.push(bankOperation);
        }
    }

    initializeBankWindows(count) {
        this.numBankWindow = count;
        this.bankWindows = [];
        for (let i = 0; i < this.numBankWindow; i++) {
            this.bankWindows[i] = new BankWindow(i);
        }
    }

    StartHandleBankOperations() {
        for (let i = 0; i < this.numBankWindow; i++) {
            this.bankWindows[i].HandleBankOperation(this.currentbankOperationsQueue.pop(), this.onBankWindowFinished);
            // this.bankWindows.push(this.bankWindow(Math.floor(Math.random() * 10000), GetRandomOperationType(), this.onBankWindowFinished));
        }
    }

    onBankWindowFinished(indexOfBankWindow){
        console.log(`window ${indexOfBankWindow} finished`)
    }

    // async bankWindow(id, bankOperation, callback){ // Coroutine
    //     console.log(`bankWindow ${id} начал выполнение и закончит через ${bankOperation}`);
    //     await new Promise((resolve) => setTimeout(resolve, bankOperation)); // Имитация асинхронной операции
    //     console.log(`bankWindow ${id} завершил выполнение`);
    //     callback(id);
    // }

    // onBankWindowFinished(id) {
    //     console.log(`onBankWindowFinished ${id}`);
    // }
}

function GetRandomOperationType(){
    const operationValues = Object.values(OperationType);
    const randomIndex = Math.floor(Math.random() * operationValues.length);
    const randomOperationValue = operationValues[randomIndex];

    console.log(`aloo ${randomOperationValue}`);
    return randomOperationValue;
}