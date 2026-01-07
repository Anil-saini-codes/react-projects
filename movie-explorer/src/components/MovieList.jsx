import React from 'react'
import MovieCart from './MovieCart'

function MovieList({movies}) {
    if (movies.length === 0) {
        return <p>No movies found.</p>;
    }
  return (
    <div className="movie-list">
			{movies.map(movie => (
				<MovieCart key={movie.imdbID} movie={movie} />
			))}
		</div>
  )
}

export default MovieList