import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title, poster, genres, synopsis, rating, torrents}) {
  return (
    <div className="movie-container">
      <div className="movie__columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="movie__columns">
        <h1>{title}</h1>
        <div className="movie__genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
        </div>
        <MovieRating rating={rating}>
          <div className="movie__rating">
          </div>
        </MovieRating>
        <div className="movie__torrents">
          {torrents.map((torrent, index) => <MovieTorrent torrent={torrent.url} key={index}/>)}
        </div>
      </div>
    </div>
  );
}

function MovieRating({rating}) {
  const score = Math.round(rating)/2;
  const stars = document.querySelector(".movie__rating");

  return (
    <div className="movie__rating">
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <HalfStar/>
      <span>{score}</span>
    </div>
  );
}

function Star() {
  return <i className="fas fa-star movie__star"></i>;
}

function HalfStar() {
  return <i className="fas fa-star-half movie__star"></i>;
}

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="movie__poster"/>
  );
}

function MovieGenre({genre}) {
  return (
    <span className="movie__genre">{genre}</span>
  );
}

function MovieTorrent({torrent}) {
  return (
    <div className="movie__torrent"><a href={torrent}><i className="fas fa-download"></i></a></div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

MovieTorrent.propTypes = {
  torrent: PropTypes.string.isRequired,
}

export default Movie;
