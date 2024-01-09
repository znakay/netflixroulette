import React from "react";
import "./index.scss";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: props.searchValue };
  }

  input = (e) => {
    this.setState((prevState) => ({
      ...prevState.searchValue,
      searchValue: e.target.value,
    }));
  };

  render() {
    return (
      <form
        className="search-form"
        onSubmit={(e) => this.props.onSubmit(e, this.state.searchValue)}
      >
        <input
          className="search-form__input"
          placeholder="What do you want to watch?"
          value={this.state.searchValue}
          onChange={this.input}
        />
        <button className="search-form__button">Search</button>
      </form>
    );
  }
}

export default SearchForm;
