import {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      name: "Groceries",
      description: "Shopping for groceries",
      category: "Food",
      amount: 5500,
      date: "2025-03-01",
      id: 1
    },
    {
      name: "Movies",
      description: "Watching movies",
      category: "Entertainment",
      amount: 1100,
      date: "2025-03-05",
      id: 2
    },
    {
      name: "Fuel",
      description: "Filling up the car",
      category: "Transport",
      amount: 15000,
      date: "2025-03-10",
      id: 3
    },
    {
      name: "Rent",
      description: "Monthly rent",
      category: "Bills",
      amount: 15000,
      date: "2025-03-15",
      id: 4
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())

  );
  
  return (
  <div className="container py-4">
    <h1 className="fw-bold">Expense Tracker</h1>
    <p>Track your expenses and manage your finances efficiently.</p>
    
    <div className="row justify-content-center my-2">
      <div className="col-md-3">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-6">
        <ExpenseForm setExpenses={setExpenses} />
      </div>

      <div className="col-md-6">
        <ExpenseTable expenses={filteredExpenses} setExpenses={setExpenses} />
      </div>
    </div>
  </div>
  
  );
}

export default App; 