import React from "react";

class SearchBar extends React.Component {
  state = {
    search: ""
  };

  onInputChange = e => {
    const search = e.target.value;
    this.setState({ search });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.search)
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              value={this.state.search}
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
