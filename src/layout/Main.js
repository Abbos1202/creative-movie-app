import React, { Component } from "react";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";

export class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=8910cacc&s=batman")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (movie, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8910cacc&s=${movie}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  };
  render() {
    return (
      <div>
        <SearchBar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
