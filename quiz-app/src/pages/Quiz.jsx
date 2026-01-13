import {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {QuizContext} from '../context/QuizContext'

import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import QuestionCart from '../components/QuestionCart'
import useTimer from '../hooks/useTimer'


export default function Quiz() {
    const {state, dispatch} = useContext(QuizContext)
    const {index, questions} = state;
    const navigate = useNavigate()

  const {time, reset} = useTimer(15)

  useEffect(() => {
    if(time === 0) {
        dispatch({type: "ANSWER", payload: false})
    }
    }, [time])

    if(!questions || questions.length === 0) {
      return <div className="text-center mt-5">No questions available</div>
    }

    if(index >= questions.length) {
        dispatch({type: "FINISH"})
        navigate('/result')
        return null
    } 
    
    const handleSelect = (options) => {
        dispatch({type: "ANSWER", payload:options=== current.answer})
        reset()
    }

    const current= questions[index];
  return (
     <div className="container mt-4">
       <Timer time={time}/>
       <ProgressBar current={index} total={questions.length}/>
       <QuestionCart 
        question={current.question}
        options={current.options}
        onSelect={handleSelect}
       /> 
    </div>
  )
}
