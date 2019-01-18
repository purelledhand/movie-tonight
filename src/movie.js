import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title, poster, genres, synopsis, rating}) {
  return (
    <div className="movie-container">
      <MoviePoster poster={poster}/>
      <div className="desc-container">
        <h1>{title}, {rating}</h1>
        <div>{genres}</div>
        <div>{synopsis}</div>
      </div>
    </div>
  );
}

function MoviePoster({poster}) {
    return (
      <img src={poster} alt="moviePoster"/>
    );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Movie;
