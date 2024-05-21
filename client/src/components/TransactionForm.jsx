import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
    const [transferAccount, setTransferAccount] = useState('');
    const [receivingBank, setReceivingBank] = useState('');
    const [accountReceivable, setAccountReceivable] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [currency, setCurrency] = useState('');

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
            <input 
                type="text" 
                placeholder="Receiving Bank" 
                value={receivingBank} 
                onChange={(e) => setReceivingBank(e.target.value)} 
            />
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
            <input 
                type="text" 
                placeholder="Currency" 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)} 
            />
            <button type="submit" className='btn'>Submit</button>
        </form>
    );
};

export default TransactionForm;
