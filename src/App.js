import React, {Component} from 'react';
import './App.css';
import Movie from './movie';

class App extends Component {

  state = {};

  // render : componentWillMount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title_long}
                    poster={movie.medium_cover_image}
                    key={movie.id}
                    id={movie.id}
                    genres={movie.genres}
                    rating={movie.rating}
                    torrents={movie.torrents}
      />
    });
    console.log(this.state.movies);
    return movies;
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => err);
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }

  componentDidMount() {
    this._getMovies();
  }

}

export default App;
