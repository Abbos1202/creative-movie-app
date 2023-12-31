import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    search: "batman",
    type: "all",
  };

  handleMovie = (e) => {
    if (e.key === "Enter") this.props.searchMovies(this.state.search, this.state.type);
  };

  handleCategory = (e) => {
    this.setState(() => ({
      type: e.target.dataset.type,
    }), () => {
      this.props.searchMovies(this.state.search, this.state.type)
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            required
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyUp={this.handleMovie}
            autoComplete="off"
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </div>
        <div className="radio-toggles">
          <input
            type="radio"
            id="option-1"
            name="radio-options"
            data-type="movie"
            onChange={this.handleCategory}
            checked={this.state.type === "movie"}
          />
          <label htmlFor="option-1">Movie</label>
          <input
            type="radio"
            id="option-2"
            name="radio-options"
            data-type="all"
            onChange={this.handleCategory}
            checked={this.state.type === "all"}
          />
          <label htmlFor="option-2"> All</label>
          <input
            type="radio"
            id="option-3"
            name="radio-options"
            data-type="series"
            onChange={this.handleCategory}
            checked={this.state.type === "series"}
          />
          <label htmlFor="option-3">Series</label>
          <div className="slide-item"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
