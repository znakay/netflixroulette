import React from "react";
import cn from "classnames";
import "./index.scss";

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownActive: false,
    };
  }

  handleSelect = () => {
    this.setState((prevState) => ({
      ...prevState.dropDownActive,
      dropDownActive: !this.state.dropDownActive,
    }));
  };

  render() {
    return (
      <div
        className={cn("genre-select", {
          "genre-select_active": this.state.dropDownActive,
        })}
      >
        <div className="genre-select__field" onClick={this.handleSelect}>
          Select Genre
        </div>
        <div className="genre-select__dropdown">
          <ul className="genre-select__list">
            {this.props.genreList.map((g) => {
              const checked = this.props.currentGenre.find((i) => i === g)
                ? true
                : false;
              return (
                <li
                  className="genre-select__item"
                  key={g}
                  onClick={this.props.onSelect}
                >
                  <input type="checkbox" value={g} id={g} checked={checked}/>
                  <label htmlFor={g}>{g}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default GenreSelect;
