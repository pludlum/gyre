import React from 'react';

class VoteButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.annotationRating,
      value: this.props.currentValue,
      currentVote: this.props.currentVote
    };

    this.handleToggleDown = this.handleToggleDown.bind(this);
    this.handleToggleUp = this.handleToggleUp.bind(this);
  }



  handleToggleUp() {
    if (this.state.currentVote === null) {
      let vote = this.props.votePOST({value: 1, user_id: this.props.currentUserId, annotation_id: this.props.annotationId}).then( (response) => this.setState({currentVote: response}));

    }

    if (this.state.value === 0) {
      this.setState({value: 1, rating: this.state.rating += 1});
    } else if (this.state.value === -1) {
      this.props.voteDELETE(this.state.currentVote.id);
      let vote = this.props.votePOST({value: 1, user_id: this.props.currentUserId, annotation_id: this.props.annotationId}).then( (response) => this.setState({currentVote: response}));
      this.setState({currentVote: vote});
      this.setState({value: 1, rating: this.state.rating += 2});
    } else {
      this.props.voteDELETE(this.state.currentVote.id);
      this.setState({value: 0, rating: this.state.rating -= 1});
      this.setState({currentVote: null});
    }
  }

  handleToggleDown() {
    console.log(this.state.currentVote);
    if (this.state.currentVote === null) {
      let vote = this.props.votePOST({value: -1, user_id: this.props.currentUserId, annotation_id: this.props.annotationId}).then( (response) => this.setState({currentVote: response}));
      this.setState({currentVote: vote});
    }

    if (this.state.value === 0) {
      this.setState({value: -1, rating: this.state.rating -= 1});
    } else if (this.state.value === 1) {
      this.props.voteDELETE(this.state.currentVote.id);
      let vote = this.props.votePOST({value: -1, user_id: this.props.currentUserId, annotation_id: this.props.annotationId}).then( (response) => this.setState({currentVote: response}));
      this.setState({currentVote: vote});
      this.setState({value: -1, rating: this.state.rating -= 2});
    } else {
      this.props.voteDELETE(this.state.currentVote.id);
      this.setState({value: 0, rating: this.state.rating += 1});
      this.setState({currentVote: null});
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
