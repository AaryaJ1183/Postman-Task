import React, { useEffect, useState } from 'react';
import './Movie.css'

function Movie() {

  const [movieList, setMovieList] = useState([]);


  const getMovie = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=482d9313029a5ffca477f86708062282");
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-container">
      {movieList.map((Movie) => (
        <div key={Movie.id} className="movie-item">

        <div className='movie_name'>{Movie.title}</div>
        <img className='movie_backdrop'
            style={
              {height:"auto",width:"40%",display:"flex",justifyContent:"center"}
          }
            src={`https://image.tmdb.org/t/p/w500${Movie.backdrop_path}`}
            alt={`${Movie.title} backdrop`}
            />
        </div>
      ))}
    </div>
  );

}

export default Movie;
