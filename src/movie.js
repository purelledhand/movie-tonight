import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title, poster, genres, rating, torrents}) {
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
  let span_class = 'movie__score';

  let str = [];
  for(let i = 0; i < parseInt(score); i++) str.push(Star());
  score % 1 ? str.push(HalfStar()) : span_class+=' movie__score__margin';

  return (
    <div className="movie__rating">
      {str}
      <span className={span_class}>{score}</span>
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
    <a href={torrent}><div className="movie__torrent"><i className="fas fa-download"></i></div></a>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
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
