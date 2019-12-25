import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  changeHandler = e => {
    this.setState({ term: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="field">
            <label htmlFor="">Stadt Wetter</label>
            <input
              type="text"
              name="term"
              placeholder="Suche..."
              value={this.state.term}
              onChange={this.changeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
