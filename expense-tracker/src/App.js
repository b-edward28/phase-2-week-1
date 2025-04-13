import {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  
  return (
  <div className="container py-4">
    <h1 className="fw-bold">Expense Tracker</h1>
    <p>Track your expenses and manage your finances efficiently.</p>
    
    <div className="row">
      <div className="col-md-6">
        <ExpenseForm setExpenses={setExpenses} />
      </div>

      <div className="col-md-6">
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  </div>
  
  );
}

export default App; 