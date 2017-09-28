import React from 'react';


class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault;
    console.log(this.props.deleteComment);
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    let deleteButton;
    if (this.props.currentUserId === this.props.comment.user_id) {
      deleteButton = <span onClick={this.handleDelete} className="delete-button"> Delete </span>;
    } else {
      deleteButton = <span className="delete-button comment">        </span>;
    }

    return (
      <li className="comment-item">
        <div className="comment-item-container">
          <p className="comment-item-body" >{this.props.comment.body}</p>
          <div className="comment-footer" >
            <p className="comment-author"> - {this.props.comment.user}</p>
            {deleteButton}
          </div>
          <div className="comment-divider">
          </div>
        </div>
      </li>
    );
  }

}


export default CommentItem;
