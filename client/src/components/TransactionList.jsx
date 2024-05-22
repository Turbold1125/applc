import React, {useState} from 'react';

const TransactionList = ({ transactions }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const filteredTransactions = transactions.filter(transaction =>
        transaction.accountReceivable.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.recipientName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div className='tr_list'>
            <h2>Гүйлгээний жагсаалт</h2>
            <input
                type="text"
                placeholder="Хайх..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredTransactions.map((transaction, index) => (
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
