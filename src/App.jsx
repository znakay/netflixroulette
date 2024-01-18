import React from "react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      genreList: ["crime", "documentary", "horror", "comedy"],
      currentGenre: [],
    };
  }

  onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
  };

  onSelect = (e) => {
    const genre = e.target.id;
    if (!e.target.closest("input")) return;

    this.setState((prevState) => {
      let currentGenre = this.state.currentGenre;

      if (currentGenre.includes(genre)) {
        currentGenre = currentGenre.filter((item) => item !== genre);
      } else {
        currentGenre.push(genre);
      }

      return { ...prevState.currentGenre, currentGenre };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Counter />
          <br />
          <SearchForm
            searchValue={this.state.searchValue}
            onSubmit={this.onSubmit}
          />
          <br />
          <GenreSelect
            genreList={this.state.genreList}
            currentGenre={this.state.currentGenre}
            onSelect={this.onSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
