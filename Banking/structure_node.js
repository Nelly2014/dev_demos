class Node {
    constructor(account) {
        this.account = account; // the account data
        this.next = null; // pointer to the next node
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(account) {
        const newNode = new Node(account);
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
            if (current.account.number === accountNumber) {
                return current.account;
            }
            current = current.next;
        }
        return null; // account not found
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(account) {
        const newNode = new Node(account);
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
            if (current.account.number === accountNumber) {
                return current.account;
            }
            current = current.next;
        }
        return null; // account not found
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(account) {
        const newNode = new Node(account);
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
            if (current.account.number === accountNumber) {
                return current.account;
            }
            current = current.next;
        }
        return null; // account not found
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(account) {
        const newNode = new Node(account);
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
            if (current.account.number === accountNumber) {
                return current.account;
            }
            current = current.next;
        }
        return null; // account not found
    }
}
class TreeNode {
    constructor(account) {
        this.account = account; // the account data
        this.left = null; // left child
        this.right = null; // right child
    }
}
class Bank {
    constructor() {
        this.accountsList = new LinkedList();
    }

    addAccount(accountNumber, balance) {
        const newAccount = { number: accountNumber, balance: balance };
        this.accountsList.add(newAccount);
    }
    transfer(fromAccountNumber, toAccountNumber, amount) {
        const fromAccount = this.accountsList.find(fromAccountNumber);
        const toAccount = this.accountsList.find(toAccountNumber);
    
        if (!fromAccount || !toAccount) {
            return 'One or both account not found'

    }
}
}