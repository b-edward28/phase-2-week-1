function ExpenseRow({ expense, handleDelete}) {
   
    return (
        <tr>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
                <button 
                className="btn btn-danger" 
                onClick={() => handleDelete(expense.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ExpenseRow;