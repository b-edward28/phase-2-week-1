import ExpenseRow from './ExpenseRow.jsx';
export default function ExpenseTable({ expenses, setExpenses, }) {

    function handleDelete(id) {
        setExpenses((prevExpenses) => 
            prevExpenses.filter((expense) => expense.id !== id)
        );
    }
   
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <ExpenseRow 
                        key={index} 
                        expense={expense}
                        handleDelete={handleDelete}  
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );

}