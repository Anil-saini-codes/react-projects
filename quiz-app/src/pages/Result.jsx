import {Link} from 'react-router-dom';
import {QuizContext} from '../context/QuizContext'
import {useEffect, useContext} from 'react'

export default function Result() {
  const {state, dispatch} = useContext(QuizContext)
  const {score} = state;
    const percentage = (Math.round((score / state.questions.length) * 100));
  useEffect(() => {
    const entry={
        name: state.username,
        score: state.score,
        percentage,
        date: new Date().toLocaleDateString(), 

    }
    const stored = JSON.parse(localStorage.getItem('leaderboard')) || [];
    //Code to Prevent duplicate entries
    const filtered = stored.filter(item =>
      !(
        item.name === entry.name &&
        item.score === entry.score &&
        item.date === entry.date
      )
    );
    //Code to Prevent duplicate entries
    const updated = [...filtered, entry];
    updated.sort((a,b) => b.score - a.score || b.percentage - a.percentage); 
    localStorage.setItem('leaderboard', JSON.stringify(updated));
  }, [])

 

  return (
     <div className="container text-center mt-5">
        <div className="card shadow p-5">
            <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
            <h4>{state.username}, your score is:</h4>
            <h1 className="text-success">{state.score}</h1>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/leaderboard" className="btn btn-primary">
                   View Leaderboard
                </Link>
                <Link onClick={() => dispatch({type: 'RESET'})} to="/" className="btn btn-warning">
                    Home
                </Link>
            </div>
        </div>
    </div>
  )
}
