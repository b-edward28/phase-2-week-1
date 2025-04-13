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
                type="button" 
                className="btn btn-danger" 
                onclick={() => handleDelete(expense.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ExpenseRow;