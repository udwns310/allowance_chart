import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;

        const newTransaction = {
            id: Date.now(),
            description,
            amount: Number(amount),
            type,
            date: new Date().toISOString().slice(0, 10),
        };
        onAdd(newTransaction);
        setDescription('');
        setAmount('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="거래 내용"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input type="number" placeholder="금액" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">수입</option>
                <option value="expense">지출</option>
            </select>
            <button type="submit">거래 추가</button>
        </form>
    );
};

export default TransactionForm;
