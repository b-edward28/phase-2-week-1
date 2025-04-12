import { useState } from 'react';
import './App.css';
import ExpenseTable from './components/ExpenseTable';

function App() {
  const [expenses, setExpenses] = useState([
    {
      name: 'Groceries',
      description: 'Weekly grocery shopping',
      category: 'Food',
      amount: 150,
      date: '2023-10-01',
    },
    {
      name: 'Utilities',
      description: 'Monthly electricity bill',
      category: 'Bills',
      amount: 100,
      date: '2023-10-05',
    },
  ]);
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <h4>Start taking control of your finances and life. Record, categorize and analyze your spending</h4>
      <ExpenseTable expenses={expenses} />
    </div>
  )
}

export default App;
