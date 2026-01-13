import {useEffect, useState} from 'react'

export default function LeaderBoard() {
    const [data, setData] = useState([])

    const clearBoard = () => {
        localStorage.removeItem('leaderboard')
        setData([])
    }

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('leaderboard')) || []
        setData(storedData)
    }, [])
  return (
    <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
        <table className="table table-striped shadow">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
               {data.length === 0 ? (
                <tr>
                    <td colSpan="5">No entries yet.</td>
                </tr>
                ) : (
                    data.map((entry, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.name}</td>
                            <td>{entry.score}</td>
                            <td>{entry.percentage}%</td>
                            <td>{entry.date}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
        <button onClick={clearBoard} className="btn btn-danger mt-3">Clear Leaderboard</button>
    </div>
  )
}
