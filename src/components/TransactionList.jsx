import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
    return (
        <div className="list">
            {transactions.map((tx) => (
                <div key={tx.id} className={`item ${tx.type}`}>
                    <span>{tx.description}</span>
                    <span>
                        {tx.type === 'income' ? '+' : '-'}
                        {tx.amount.toLocaleString()}원
                    </span>
                    <button onClick={() => onDelete(tx.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
