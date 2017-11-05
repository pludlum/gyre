import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchItem from './search_item';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.updateField = this.updateField.bind(this);
    this.clearResultsOnDelay = this.clearResultsOnDelay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  clearResultsOnDelay() {
    setTimeout(this.props.clearResults, 200);
  }

  handleSubmit(e) {
    e.preventDefault();
    let poem = this.props.results[0];
    this.props.history.push(`/poets/${poem.author_id}/poems/${poem.id}`);
    this.props.clearResults();
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
        <form onSubmit={this.handleSubmit} className="search-bar-form">
          <input type="text"
            className="search-bar"
            value={this.state.input}
            placeholder="Search all poems"
            onChange={this.updateField}
            onBlur={this.clearResultsOnDelay}/>
        </form>
        <ul className={`results-list ${itemListHidden}`}
            onClick={this.props.clearResults} >
          {resultItems}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
