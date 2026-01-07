import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm.jsx'
import ExpenseList from './ExpenseList.jsx'

function App() {
  const [expenses, setExpense] = useState(() =>{
    const savedExpenses = localStorage.getItem('expenses');
      return savedExpenses ? JSON.parse(savedExpenses) : [];
  }) 

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpense =(expenses) =>{
    setExpense((prev) => [...prev, expenses])
  }
  const deleteExpense = (id) =>{
   setExpense((prev) => prev.filter((expense) => expense.id !== id))
  }

  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2); 
  //We Can use map Method also to calculate total amount

  return (
    <>
      <div className="app-container">
		<h1>💰 Expense Tracker</h1>
		<ExpenseForm onAddExpense={addExpense} />
		<h3 className="total">Total Expense: ₹{totalAmount}</h3>
		<ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
	</div>
    </>
  )
}

export default App
