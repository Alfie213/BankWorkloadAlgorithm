import { BankOperation, OperationType } from "./BankOperation.js";
import { BankWindow } from "./BankWindow.js";

export class BankQueue {
    constructor(startNumBankOperations, numBankWindows) {
        this.initializeBankOperations(startNumBankOperations);
        this.initializeBankWindows(numBankWindows);

        this.debugInformation();
        // this.startHandleBankOperations();
    }

    constructor(bankOperations, numBankWindows) {
        this.AddArray(bankOperations);
        this.initializeBankWindows(numBankWindows);
    }

    debugInformation() {
        let timesOfOperations = '';
        for (let i = this.bankOperationsQueue.length - 1; i >= 0; i--) {
            const element = this.bankOperationsQueue[i];
            timesOfOperations += (element.operationType/1000) + ' ';
        }
        console.log(`We have ${this.bankOperationsQueue.length} operations and ${this.bankWindows.length} windows. Their time in seconds you can see below.`)
        console.log(timesOfOperations);
    }

    initializeBankOperations(numOperations) {
        this.currentNumOfBankOperations = numOperations;
        this.bankOperationsQueue = [];

        for (let i = 0; i < this.currentNumOfBankOperations; i++) {
            const bankOperation = new BankOperation(GetRandomOperationType());
            this.Add(bankOperation);
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
            const bankOperation = this.tryGetNextBankOperation();
            if (bankOperation !== undefined) {
                this.sendBankOperationToBankWindow(bankOperation, i);
            }
            else return; // Because if we have met undefined, it means that this.currentbankOperationsQueue is empty. And we don't need to continue.
        }
    }

    Add(bankOperation) {
        this.bankOperationsQueue.push(bankOperation);
    }

    AddArray(bankOperations) {
        for (const operation of bankOperations) {
            this.Add(operation);
        }
    }

    sendBankOperationToBankWindow(bankOperation, bankWindowIndex) {
        this.bankWindows[bankWindowIndex].HandleBankOperation(bankOperation, () => this.onBankWindowFinished(bankWindowIndex));
    }

    // Returns BankOperation from this.currentbankOperationsQueue. Else returns undefined.
    tryGetNextBankOperation() {
        return this.bankOperationsQueue.pop();
    }

    increaseCurrentNumOfBankOperations() {
        this.currentNumOfBankOperations += 1;
    }

    decreaseCurrentNumOfBankOperations() {
        this.currentNumOfBankOperations -= 1;
    }

    onBankWindowFinished(bankWindowIndex) {
        this.decreaseCurrentNumOfBankOperations();
        // console.log(`onBankWindowFinished!`);
        console.log(`BankWindow ${bankWindowIndex} finished.`);
        const bankOperation = this.tryGetNextBankOperation();
        if (bankOperation !== undefined) {
            this.sendBankOperationToBankWindow(bankOperation, bankWindowIndex);
        }
    }
}

function GetRandomOperationType() {
    const operationValues = Object.values(OperationType);
    const randomIndex = Math.floor(Math.random() * operationValues.length);
    const randomOperationValue = operationValues[randomIndex];

    // console.log(`aloo ${randomOperationValue}`);
    return randomOperationValue;
}