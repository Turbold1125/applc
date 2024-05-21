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
    const [balance, setBalance] = useState(0);
    const [user, setUser] = useState(null);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const handleLogout = () => {
        navigate('/login');
    };
    
    useEffect(() => {
        // Fetch user's information when the component mounts
        const fetchUser = async () => {
            try {
                // Retrieve the username from local storage
                const storedUsername = localStorage.getItem('username');

                // Make request to fetch user's information using the username
                const response = await axios.get(`http://localhost:8080/api/users/${storedUsername}`);
                setUser(response.data);
                setBalance(response.data.balance); // Assuming balance is part of the user's information
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className='background home'>
            <section className='home_greeting'>
                <h1 className='home_title'>Оройн мэнд, {user && user.username ? user.username : 'хангалттай хүн'} Хайр даднадаа дадна ❤️</h1>
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
