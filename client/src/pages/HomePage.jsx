import React, { useState } from 'react';
import Balance from '../components/Balance';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [transactions, setTransactions] = useState([]);
    const [showTransactionForm, setShowTransactionForm] = useState(false);
    const navigate = useNavigate();

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <Balance />
            <button onClick={() => setShowTransactionForm(!showTransactionForm)}>
                {showTransactionForm ? 'Hide' : 'Make a Transaction'}
            </button>
            {showTransactionForm && <TransactionForm addTransaction={addTransaction} />}
            <TransactionList transactions={transactions} />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;
