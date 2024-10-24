
JavaScript:
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }


    find(accountNumber) {
        let current = this.head;
        while (current) {
            if (current.data.accountNumber === accountNumber) {
                return current.data;
            }
            current = current.next;
        }
        return null;
    }
}
 

class BankAccount {
    constructor(accountNumber, accountHolderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
        } else {
            console.log(`Insufficient balance in account ${this.accountNumber}.`);
        }
    }

    transfer(amount, recipientAccount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            recipientAccount.deposit(amount);
            console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
        } else {
            console.log(`Insufficient balance in account ${this.accountNumber} for transfer.`);
        }
    }

    displayBalance() {
        console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
    }
}
 
JavaScript:
class Bank {
    constructor() {
        this.accounts = new LinkedList();
    }


    createAccount(accountNumber, accountHolderName, initialBalance = 0) {
        const newAccount = new BankAccount(accountNumber, accountHolderName, initialBalance);
        this.accounts.add(newAccount);
        console.log(`Account ${accountNumber} created for ${accountHolderName}.`);
    }

    getAccount(accountNumber) {
        return this.accounts.find(accountNumber);
    }

    performTransaction(accountNumber, type, amount, recipientAccountNumber = null) {
        const account = this.getAccount(accountNumber);
        if (!account) {
            console.log(`Account ${accountNumber} not found.`);
            return;
        }

        switch (type) {
            case 'deposit':
                account.deposit(amount);
                break;
            case 'withdraw':
                account.withdraw(amount);
                break;
            case 'transfer':
                const recipientAccount = this.getAccount(recipientAccountNumber);
                if (recipientAccount) {
                    account.transfer(amount, recipientAccount);
                } else {
                    console.log(`Recipient account ${recipientAccountNumber} not found.`);
                }
                break;
            default:
                console.log('Invalid transaction type.');
        }
    }

    displayAccountBalance(accountNumber) {
        const account = this.getAccount(accountNumber);
        if (account) {
            account.displayBalance();
        } else {
            console.log(`Account ${accountNumber} not found.`);
        }
    }
}

// Example usage
const bank = new Bank();
bank.createAccount('001', 'Neliswa', 5000);
bank.createAccount('002', 'Unako', 2000);

bank.displayAccountBalance('001');
bank.performTransaction('001', 'deposit', 500);
bank.performTransaction('001', 'withdraw', 100);
bank.performTransaction('001', 'transfer', 1000, '002');

bank.displayAccountBalance('001');
bank.displayAccountBalance('002');

 


