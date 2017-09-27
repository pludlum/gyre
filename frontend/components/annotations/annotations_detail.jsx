import React from 'react';
import VoteButtonsContainer from '../vote_buttons/vote_buttons_container';



class AnnotationDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteAnnotation(this.props.annotation.id);
    this.props.removeAnnotation();
  }


  render() {
    if (this.props.annotation === undefined) return null;

    return (
      <div className="annotation-detail-column" style={{paddingTop: this.props.height}}>
        <div className="annotation-body-container">
          <p className="annotation-body">{this.props.annotation.body}</p>
          <p className="annotation-author"> - {this.props.annotation.username}</p>
          <div className="annotation-footer">
            <VoteButtonsContainer key={Date.now()} />
            <span onClick={this.handleDelete} className="delete-button"> Delete </span>
          </div>
        </div>
      </div>
    );
  }
}


export default AnnotationDetail;
