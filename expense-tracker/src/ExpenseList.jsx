import { useState, useEffect } from 'react'
import ExpenseItem from './ExpenseItem.jsx'

function ExpenseList({expenses, onDeleteExpense}) {
    if (expenses.length === 0) {
        return <p className="no-expenses">No expenses added yet.</p>
    }
  return (
    <div><div className="expense-list">
            {expenses.map((expense, index) => (
                <ExpenseItem key={expense.id} expense={expense} onDelete={onDeleteExpense} />
            ))}
		</div></div>
  )
}

export default ExpenseList