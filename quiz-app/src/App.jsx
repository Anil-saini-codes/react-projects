import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import LeaderBoard from './pages/LeaderBoard';
const Result = lazy(() => import('./pages/Result'));
import QuizProvider from './context/QuizContext';


function App() {

  return (
    <>
      <QuizProvider>
      <Router>
        <Suspense fallback={<div className='text-center mt-5'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/leaderboard' element={<LeaderBoard />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </Suspense>
      </Router>
      </QuizProvider>
    </>
  )
}

export default App
