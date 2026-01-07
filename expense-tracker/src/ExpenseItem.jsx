import { useState, useEffect } from 'react'

function ExpenseItem({ expense, onDelete }) {
  return (
    <div><div className="expense-item"><span>{expense.title}</span><span>₹{expense.amount}</span><button onClick={() => onDelete(expense.id)}>❌</button></div></div>
  )
}

export default ExpenseItem