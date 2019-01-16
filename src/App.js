import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

const movies = [
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
];

class App extends Component {
  componentWillMount() {
    console.log("BEFORE Rendering");
  }

  // render : componentWillMount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  render() {
    console.log("Rendering...");
    return (
      <div className="App">
        {
          movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })
        }
      </div>
    );
  }


  componentDidMount() {
    console.log("AFTER Rendering");
  }


}

export default App;
