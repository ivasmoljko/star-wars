import React, { Component } from "react";
import { MovieList } from "./pages/movie-page/components/movie-list/movie-list.component.jsx";


class Movies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((users) =>  this.setState({ movies: users.results }));
  }
  render() {
    return ( 
      <div className="movies">
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default Movies;
