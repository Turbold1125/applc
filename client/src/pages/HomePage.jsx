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
    const [user, setUser] = useState({});

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const handleLogout = () => {
        navigate('/login');
    };
    
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const userId = 'turuu';
                const userResponse = await axios.get(`http://localhost:8080/api/users/${userId}`);
                setUser(userResponse.data);
                console.log(userResponse.data);
                
                // const transactionsResponse = await axios.get(`http://localhost:8080/api/transactions/users/${userId}`);
                // setTransactions(transactionsResponse.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);
    
    return (
        <div className='background home'>
            <section className='home_greeting'>
                <h1 className='home_title'>Оройн мэнд, {user.username}</h1>
                <button onClick={handleLogout} className='btn'>Гарах</button>
            </section>
            <div className='home_section'>
                <section className='home_balance'>
                <div className='balance'>
                <h2>Дансны дугаар: {user.accounts}</h2>
                <h2>Дансны үлдэгдэл: ${user.balance}</h2>
                </div>
                    <button onClick={() => setShowTransactionForm(!showTransactionForm)}
                        className='btn'>
                        {showTransactionForm ? 'Нуух' : 'Гүйлгээ хийх'}
                    </button>
                    {showTransactionForm && <TransactionForm addTransaction={addTransaction} user={user}/>}
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
