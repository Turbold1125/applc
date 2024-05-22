import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TransactionForm = ({ addTransaction, user }) => {
    const [transferAccount, setTransferAccount] = useState('');
    const [accountReceivable, setAccountReceivable] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [receivingBank, setReceivingBank] = useState('');
    const [banks, setBanks] = useState([]);
    const [transactionDesc, setTransactionDesc] = useState('');
    
    useEffect(() => {
        
        const fetchBanks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/banks/all');
                setBanks(response.data);
            } catch (error) {
                console.error('Error fetching banks:', error);
            }
        };
        
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/currencies/all');
                setCurrencies(response.data);
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };
        
        fetchBanks();
        fetchCurrencies();
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            transferAccount,
            receivingBank,
            accountReceivable,
            recipientName,
            transactionAmount,
            currency,
            transactionDesc
        };
        addTransaction(newTransaction);
        setTransferAccount('');
        setReceivingBank('');
        setAccountReceivable('');
        setRecipientName('');
        setTransactionAmount('');
        setCurrency('');
        setTransactionDesc('');
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const newTransaction = {
    //         users: { id: 1 }, 
    //         bank: { id: banks.find(bank => bank.name === receivingBank)?.id }, 
    //         currency: { id: currencies.find(cur => cur.code === currency)?.id },
    //         receiverBankAccount: accountReceivable,
    //         receiverUsername: recipientName,
    //         amount: parseFloat(transactionAmount),
    //         description: "Payment for services"
    //     };
    //     try {
    //         const response = await axios.post('http://localhost:8080/api/transactions/create', newTransaction, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         addTransaction(response.data);
    //         setTransferAccount('');
    //         setReceivingBank('');
    //         setAccountReceivable('');
    //         setRecipientName('');
    //         setTransactionAmount('');
    //         setCurrency('');
    //     } catch (error) {
    //         console.error('Error creating transaction:', error);
    //     }
    // }

    return (
        
        <form onSubmit={handleSubmit}>
            <hr />
            <h2 className='trform_title'>Шилжүүлэг хийх </h2>
            <input 
                type="text" 
                placeholder={user.accounts} 
                value={user.accounts} 
                onChange={(e) => setTransferAccount(e.target.value)} 
            />
            <select 
                value={receivingBank} 
                onChange={(e) => setReceivingBank(e.target.value)} 
                className="select-dropdown"
            >
                <option value="" disabled>Банк сонгох</option>
                {banks.map((bank) => (
                <option key={bank.id} value={bank.name}>{bank.name}</option>
                ))}
            </select>
            <input 
                type="text" 
                placeholder="Хүлээн авах данс" 
                value={accountReceivable} 
                onChange={(e) => setAccountReceivable(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Хүлээн авагчийн нэр" 
                value={recipientName} 
                onChange={(e) => setRecipientName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Гүйлгээний дүн" 
                value={transactionAmount} 
                onChange={(e) => setTransactionAmount(e.target.value)} 
            />
            <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)} 
                className="select-dropdown"
            >
                <option value="" disabled>Мөнгөн тэмдэгт сонгох</option>
                {currencies.map((cur) => (
                    <option key={cur.id} value={cur.code}>{cur.code}</option>
                ))}
            </select>
            <input 
                type="number" 
                placeholder="Гүйлгээний утга" 
                value={transactionDesc} 
                onChange={(e) => setTransactionDesc(e.target.value)} 
            />
            <button type="submit" className='btn'>Илгээх</button>
        </form>
    );
};

export default TransactionForm;
