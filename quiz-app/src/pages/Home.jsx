import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {QuizContext} from '../context/QuizContext'

export default function Home() {
  const [name, setName] = useState('')
  const {dispatch} = useContext(QuizContext)
    const navigate = useNavigate()


  const startQuiz = () => {
    if (!name.trim()) return alert('Please enter your name')
        dispatch({type: "SET_NAME", payload: name})
        navigate('/quiz') 
}
      // Navigate to quiz page 

  return (
      <div className="container text-center mt-5">
        <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="form-control w-50 mx-auto mb-3" type="text" />
        <button onClick={startQuiz} className="btn btn-primary btn-lg">Start Quiz</button>
    </div>
  )
}
