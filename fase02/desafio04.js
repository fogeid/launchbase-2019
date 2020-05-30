// Desafio 04 : https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md

// Intro
const user = {
    name: "Mariana",
    transactions: [
        {
            type: 'credit',
            value: 50.5
        }
    ],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);
    if (transaction.type === 'credit') {
        user.balance += transaction.value;
    }
    else if (transaction.type === 'debit') {
        user.balance -= transaction.value;
    }
};

function getHigherTransactionByType(type) {
    let hightValue = 0;
    let highTransaction;
    for (let i = 0; i < user.transactions.length; i++) {
        if (type === user.transactions[i].type && user.transactions[i].value > hightValue) {
            hightValue = user.transactions[i].value;
            highTransaction = user.transactions[i];
        }
    }
    console.log('Highest transactions: R$', highTransaction);
};

function getAverageTransactionValue() {
    let value = 0;
    let averageValue = 0;
    for (let i = 0; i < user.transactions.length; i++) {
        value += user.transactions[i].value;
    }
    
    averageValue = value / user.transactions.length;
    return averageValue;
};

function getTransactionsCount() {
    let transactions = {
        credit: 0,
        debit: 0
    }

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === 'credit') {
            transactions.credit++;
        } else {
            transactions.debit++;
        }
    }
    return transactions;
};

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });


console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 66.1

console.log(getTransactionsCount()); // { credit: 3, debit: 2 }