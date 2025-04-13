import { useState } from "react";

export default ExpenseForm;

function ExpenseForm({ setExpenses }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newExpense = {
            id: Date.now(),
            name,
            description,
            category,
            amount: parseFloat(amount),
            date,
        };

        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

        setName("");
        setDescription("");
        setCategory("");
        setAmount("");
        setDate("");
    };  

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-title">Add Expense</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Expense Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Expense Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="category" 
                        placeholder="Expense Category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                        type="number" 
                        className="form-control" 
                        id="amount" 
                        placeholder="Expense Amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Submit</button>
                </form>
            </div>
        </div>
        
    );
}
