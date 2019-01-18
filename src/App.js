import React, {Component} from 'react';
import './App.css';
import Movie from './movie';

class App extends Component {

  state = {};

  // render : componentWillMount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  _renderMovies = () => {
    if(!this.state.movies) return;
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id}/>
    });

    return movies;
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
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
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading...'}
      </div>
    );
  }

  componentDidMount() {
    this._getMovies();
  }

}

export default App;
