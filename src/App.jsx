import React from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
    const [transactions, setTransactions] = useLocalStorage('transactions', []);

    const addTransaction = (transaction) => {
        setTransactions([transaction, ...transactions]);
    };

    const deleteTransaction = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            setTransactions(transactions.filter((tx) => tx.id !== id));
        }
    };

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <h1 className="title">용돈기입장</h1>
                <Header transactions={transactions} />
                <div className="main-section">
                    <TransactionForm onAdd={addTransaction} />
                    <div className="scroll-container">
                        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
