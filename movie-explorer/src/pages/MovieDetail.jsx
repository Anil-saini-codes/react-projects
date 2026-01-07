import { use } from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const fetchMovieDetail = async () => {
            const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=421dffff`); 
            const data = await res.json();
            setMovie(data);
        };
        fetchMovieDetail(); 
    }, [id]);

    if(!movie){
        return <p>Loading...</p>;
    }
  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>
  )
}

export default MovieDetail