import React, {useState} from 'react';

const TransactionList = ({ transactions }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const search = (e) => {
        setSearchQuery(e.target.value);
    };
    const filter = transactions.filter(transaction =>
        transaction.receiverBankAccount.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.receiverUsername.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div className='tr_list'>
            <div className='search'>
                <h2>Гүйлгээний жагсаалт</h2>
                <input
                    type="text"
                    placeholder="Хайх..."
                    value={searchQuery}
                    onChange={search}
                />
            </div>
            <ul>
                {filter.map((transaction, index) => (
                    <li key={index}>
                        <p>Хүлээн авагч: {transaction.receiverUsername}</p>
                        <p>Илгээгч: {transaction.transferAccount}</p>
                        <p>Мөнгөн дүн: {transaction.amount} {transaction.currency}</p>
                        <p>Гүйлгээний утга: {transaction.description}</p>
                        <p>Он сар: {new Date(transaction.transactionDate).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
