import ExpenseRow from './ExpenseRow.jsx';
function ExpenseTable({ expenses }) {
   
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
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseRow 
                        key={expense.id} 
                        expense={expense}  
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;