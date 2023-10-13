import { BankOperation } from './BankOperation.js'

export class BankWindow {
    constructor(id) {
        this.id = id;
    }

    /** @param {BankOperation} operation **/
    async HandleBankOperation(operation, callback) {
        console.log(`BankWindow ${this.id} started handling BankOperation. Time of operation - ${operation.operationType / 1000} seconds.`);
        await new Promise((resolve) => setTimeout(resolve, operation.operationType));
        callback(this.id);
    }
}