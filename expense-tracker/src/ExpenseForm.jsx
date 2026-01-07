import { useState, useRef } from 'react'

function ExpenseForm({onAddExpense}) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const titleRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !amount) {
            alert("Please enter valid data")
            return
        }
        const newExpense = {
            id: Date.now(),
            title,  
            amount: parseFloat(amount)
        }
        onAddExpense(newExpense)
        setTitle('')
        setAmount('') 
        titleRef.current.focus();  
    }
  return (
    <div><form className="expense-form" onSubmit={handleSubmit}>
			<input ref={titleRef} placeholder="Expense Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
			<input placeholder="Amount ₹" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
			<button type="submit">Add Expense</button>
		</form></div>
  )
}

export default ExpenseForm