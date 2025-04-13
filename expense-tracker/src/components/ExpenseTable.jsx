import ExpenseRow from './ExpenseRow.jsx';
function ExpenseTable({ expenses, setExpenses, }) {

    function handleDelete(id) {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id)
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
                        <th>Amount(KES)</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseRow 
                        key={expense.id} 
                        expense={expense}
                        handleDelete={handleDelete}  
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );

}
export default ExpenseTable;