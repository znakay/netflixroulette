import React from "react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      onSubmit: (e, value) => {
        e.preventDefault();
        console.log(value);
      },
    };
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Counter />
          <br />
          <SearchForm
            searchValue={this.state.searchValue}
            onSubmit={this.state.onSubmit}
          />
          
        </div>
      </div>
    );
  }
}

export default App;
