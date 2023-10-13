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
        this.bankOperationsQueue = [];

        for (let i = 0; i < this.currentNumOfBankOperations; i++) {
            const bankOperation = new BankOperation(GetRandomOperationType());
            this.bankOperationsQueue.push(bankOperation);
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

    sendBankOperationToBankWindow(bankOperation, bankWindowIndex) {
        this.bankWindows[bankWindowIndex].HandleBankOperation(bankOperation, this.onBankWindowFinished);
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
        console.log(`onBankWindowFinished! Window ${bankWindowIndex} finished.`);
        const bankOperation = this.tryGetNextBankOperation;
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