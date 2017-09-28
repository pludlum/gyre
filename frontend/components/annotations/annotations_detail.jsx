import React from 'react';
import VoteButtonsContainer from '../vote_buttons/vote_buttons_container';
import Comments from '../comments/comments_container';



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

    let deleteButton;
    if (this.props.annotation.user_id === this.props.currentUserId) {
      deleteButton = <span onClick={this.handleDelete} className="delete-button"> Delete </span>;
    } else {
      deleteButton = <span className="delete-button">        </span>;
    }

    return (
      <div className="annotation-detail-column" style={{paddingTop: this.props.height}}>
        <div className="annotation-body-container">
          <p className="annotation-body">{this.props.annotation.body}</p>
          <p className="annotation-author"> - {this.props.annotation.username}</p>
          <div className="annotation-footer">
            <VoteButtonsContainer key={Date.now()} />
            {deleteButton}
          </div>
        </div>
        <div>
          <Comments key={Date.now()}/>
        </div>
      </div>
    );
  }
}


export default AnnotationDetail;
