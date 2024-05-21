import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.transferAccount}= {transaction.accountReceivable}: {transaction.transactionAmount} {transaction.currency}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
