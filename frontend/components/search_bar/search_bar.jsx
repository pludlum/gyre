import React from 'react';
import SearchItem from './search_item';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(e) {
    let currentValue = e.currentTarget.value;
    this.setState({input: currentValue});
    if (currentValue !== "") {
      this.props.fetchResults(currentValue);
    } else {
      this.props.clearResults();
    }
  }

  render() {
    let resultItems;
    let itemListHidden = "";

    if (this.props.results.length > 0) {
      resultItems = this.props.results.map( (result) => (
        <SearchItem key={`result + ${result.id}`} poem={result} />
      ));
    } else {
      itemListHidden = "hidden";
      resultItems = null;
    }



    return (
      <div className="search-bar-container">
        <input type='text'
          className="search-bar"
          value={this.state.input}
          placeholder="Search all poems"
          onChange={this.updateField}></input>
        <ul className={`results-list ${itemListHidden}`}>
          {resultItems}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
