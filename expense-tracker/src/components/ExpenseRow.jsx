function ExpenseRow({ expense}) {
    return (
        <tr>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
        </tr>
    );
}

export default ExpenseRow;