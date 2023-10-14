export class BankOperation {
    /**@param {OperationType} operationType - Operation type.**/
    constructor(operationType, disability) {
        this.operationType = operationType;
        this.disability = disability;
    }

}

// {Type} - {Time in seconds}
export const OperationType = {
    Question: 1000,
    Credit: 5000,
    Deposit: 2000
}