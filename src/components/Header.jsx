import React from 'react';

const Header = ({ transactions }) => {
    const income = transactions.filter((tx) => tx.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
    const expense = transactions.filter((tx) => tx.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="header">
            <h2>잔액: {(income - expense).toLocaleString()}원</h2>
            <p className="income">+ 수입: {income.toLocaleString()}원</p>
            <p className="expense">- 지출: {expense.toLocaleString()}원</p>
        </div>
    );
};

export default Header;
