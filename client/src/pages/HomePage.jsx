import React, { useState, useEffect } from 'react';
import Balance from '../components/Balance';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div className='background home'>
            <section className='home_greeting'>
                <h1 className='home_title'>Оройн мэнд, </h1>
                <button onClick={handleLogout} className='btn'>Гарах</button>
            </section>
            <div className='home_section'>
                <section className='home_balance'>
                    <Balance />
                    <button onClick={() => setShowTransactionForm(!showTransactionForm)}
                        className='btn'>
                        {showTransactionForm ? 'Нуух' : 'Гүйлгээ хийх'}
                    </button>
                    {showTransactionForm && <TransactionForm addTransaction={addTransaction} />}
                </section>
                <div className='divider'></div>
                <section className='home_tr_list'>
                    <TransactionList transactions={transactions} />
                </section>
            </div>
        </div>
    );
};

export default HomePage;
