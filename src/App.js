import React, {Component} from 'react';
import './App.css';
import Movie from './movie';

class App extends Component {

  state = {};

  componentWillMount() {
  }

  // render : componentWillMount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies?this._renderMovies():'loading...'}
      </div>
    );
  }



  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            id: 1,
            title: "The Office US",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg",
          },
          {
            id: 2,
            title: "Silicon Valley",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg",
          },
          {
            id: 3,
            title: "Avengers",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg",
          },
          {
            id: 4,
            title: "Love Actually",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg",
          },
        ]
      });
    }, 3000);
  }


}

export default App;
