import React, { useState, useEffect } from "react";
import axios from "axios";
const TransactionForm = ({ addTransaction, user }) => {
  const [transferAccount, setTransferAccount] = useState(user.accounts);
  const [receiverBankAccount, setReceiverBankAccount] = useState("");
  const [receiverUsername, setReceiverUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [receivingBank, setReceivingBank] = useState("");
  const [banks, setBanks] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/banks/all");
        setBanks(response.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/currencies/all"
        );
        setCurrencies(response.data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
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
        receiverBankAccount,
        receiverUsername,
        amount,
        description,
        transactionDate: new Date()
    };

    console.log('New Transaction:', newTransaction);

        addTransaction(newTransaction);
        setTransferAccount('');
        setReceivingBank('');
        setReceiverBankAccount('');
        setReceiverUsername('');
        setAmount('');
        setCurrency('');
        setDescription('');
};


  return (
    <form onSubmit={handleSubmit}>
      <hr />
      <h2 className="trform_title">Шилжүүлэг хийх </h2>
      <input
        type="text"
        placeholder="Шилжүүлэх данс"
        value={transferAccount}
        onChange={(e) => setTransferAccount(e.target.value)}
      />
      <select
        value={receivingBank}
        onChange={(e) => setReceivingBank(e.target.value)}
        className="select-dropdown"
      >
        <option value="" disabled>
          Банк сонгох
        </option>
        {banks.map((bank) => (
          <option key={bank.id} value={bank.name}>
            {bank.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Хүлээн авах данс"
        value={receiverBankAccount}
        onChange={(e) => setReceiverBankAccount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Хүлээн авагчийн нэр"
        value={receiverUsername}
        onChange={(e) => setReceiverUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Гүйлгээний дүн"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="select-dropdown"
      >
        <option value="" disabled>
          Мөнгөн тэмдэгт сонгох
        </option>
        {currencies.map((cur) => (
          <option key={cur.id} value={cur.code}>
            {cur.code}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Гүйлгээний утга"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn">
        Илгээх
      </button>
    </form>
  );
};

export default TransactionForm;
