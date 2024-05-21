import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
        <div className='tr_list'>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <p>Хүлээн авагч: {transaction.accountReceivable}</p>
                        <p>Илгээгч: {transaction.transferAccount}</p>
                        <p>Мөнгөн дүн: {transaction.transactionAmount} {transaction.currency}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
