import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TransactionForm = ({ addTransaction }) => {
    const [transferAccount, setTransferAccount] = useState('');
    const [accountReceivable, setAccountReceivable] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [receivingBank, setReceivingBank] = useState('');
    const [banks, setBanks] = useState([]);
    
    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const responses = await axios.get('http://localhost:8080/api/banks/all');
                setBanks(responses.data);
                console.log(responses.data);
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
        };
        addTransaction(newTransaction);
        setTransferAccount('');
        setReceivingBank('');
        setAccountReceivable('');
        setRecipientName('');
        setTransactionAmount('');
        setCurrency('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <hr />
            <h2 className='trform_title'>Шилжүүлэг хийх</h2>
            <input 
                type="text" 
                placeholder="Transfer Account" 
                value={transferAccount} 
                onChange={(e) => setTransferAccount(e.target.value)} 
            />
            <select 
    value={receivingBank} 
    onChange={(e) => setReceivingBank(e.target.value)} 
    className="select-dropdown"
>
    <option value="" disabled>Select Bank</option>
    {banks.map((bank) => (
        <option key={bank.id} value={bank.name}>{bank.name}</option>
    ))}
</select>
            <input 
                type="text" 
                placeholder="Account Receivable" 
                value={accountReceivable} 
                onChange={(e) => setAccountReceivable(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Recipient Name" 
                value={recipientName} 
                onChange={(e) => setRecipientName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Transaction Amount" 
                value={transactionAmount} 
                onChange={(e) => setTransactionAmount(e.target.value)} 
            />
            <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)} 
                className="select-dropdown"
            >
                <option value="" disabled>Select Currency</option>
                {currencies.map((cur) => (
                    <option key={cur.id} value={cur.code}>{cur.code}</option>
                ))}
            </select>
            <button type="submit" className='btn'>Submit</button>
        </form>
    );
};

export default TransactionForm;
