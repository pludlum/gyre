import React from 'react';

class VoteButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.annotationRating,
      value: this.props.currentValue
    };

    this.handleToggleDown = this.handleToggleDown.bind(this);
    this.handleToggleUp = this.handleToggleUp.bind(this);
  }

  handleToggleUp() {
    if (this.state.value === 0) {
      this.setState({value: 1, rating: this.state.rating += 1});
    } else if (this.state.value === -1) {
      this.setState({value: 1, rating: this.state.rating += 2});
    } else {
      this.setState({value: 0, rating: this.state.rating -= 1});
    }
  }

  handleToggleDown() {
    if (this.state.value === 0) {
      this.setState({value: -1, rating: this.state.rating -= 1});
    } else if (this.state.value === 1) {
      this.setState({value: -1, rating: this.state.rating -= 2});
    } else {
      this.setState({value: 0, rating: this.state.rating += 1});
    }
  }






  render() {
    let thumbsUp;
    let thumbsDown;
    if (this.state.value === 1) {
      thumbsDown = <i className="fa fa-thumbs-o-down" onClick={this.handleToggleDown} ></i>;
      thumbsUp = <i className="fa fa-thumbs-o-up green" onClick={this.handleToggleUp} ></i>;
    } else if (this.state.value === -1) {
      thumbsDown = <i className="fa fa-thumbs-o-down red" onClick={this.handleToggleDown} ></i>;
      thumbsUp = <i className="fa fa-thumbs-o-up" onClick={this.handleToggleUp} ></i>;
    } else {
      thumbsDown = <i className="fa fa-thumbs-o-down" onClick={this.handleToggleDown} ></i>;
      thumbsUp = <i className="fa fa-thumbs-o-up" onClick={this.handleToggleUp} ></i>;
    }


    return (
      <div className="like-buttons-container">
        {thumbsDown}
        <span className="rating-span" > Rating: {`${this.state.rating}`} </span>
        {thumbsUp}
      </div>
    );
  }
}


export default VoteButtons;
