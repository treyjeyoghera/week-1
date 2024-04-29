import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionForm from './transactionform';
import TransactionsTable from './transaction';
import SearchBar from './searchbar';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Initial transactions data
    const initialTransactions = [
      { id: 1, date: '2024-04-28', description: 'Groceries', amount: -50 ,category:"food"},
      { id: 1, date: '2024-04-28', description: 'GroceriLes', amount: -50 ,category:"home"},
      { id: 1, date: '2024-04-18', description: 'kitchen', amount: -50 ,category:"allover"},
      { id: 1, date: '2024-04-23', description: 'rent', amount: -50 ,category:"home"},
      { id: 1, date: '2024-03-28', description: 'fruit', amount: -50 ,category:"market"},
      { id: 1, date: '2024-02-28', description: 'market', amount: -50 ,category:"transport"},
      { id: 1, date: '2024-03-28', description: 'phone', amount: -50 ,category:"food"},
      { id: 1, date: '2024-04-28', description: 'Groceries', amount: -50 ,category:"market"},
      { id: 1, date: '2024-04-28', description: 'Groceries', amount: -50 ,category:"food"},

      

      
      // adding more initial transactions as needed
    ];
    setTransactions(initialTransactions);
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron </h1>
      <SearchBar onSearch={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
