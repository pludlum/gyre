import React from 'react';
import CommentItem from './comment_item';


class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      body: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = [];
  }

  componentDidMount() {
    this.props.fetchComments(this.props.annotationId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({comments: nextProps.comments});
    }
  }


  update() {
    return e => this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body === "") {
      if (this.errors.length < 1) {
        this.errors.push("Comment can't be blank!");
        this.setState({body: " "});
        this.setState({body: ""});
      }
      return;
    } else {
      this.errors = [];
    }
    let annoId = this.props.annotationId;
    this.props.createComment({body: this.state.body, annotation_id: annoId});

    this.setState({body: ""});
  }


  renderErrors() {

    if (this.errors.length > 0) {
      return(
        <ul className="errors-list comments" >
          {this.errors.map( (error_message, i) => (
            <li key={`error-${i}`}>
              {error_message}
            </li>
          ))}
        </ul>
      );
    }
  }


  render() {
    let commentItem;
    if (this.props.comments.length === 0) {
      commentItem = [];
    } else {
      commentItem = this.props.comments.map( comment => (
        <CommentItem key={`comment-${comment.id}`}
                     comment={comment}
                     currentUserId={this.props.currentUserId}
                     deleteComment={this.props.deleteComment} />
      ));
    }

    return (
      <div className="comment-component">
        <ul className="comment-list">
          {commentItem}
        </ul>
        <div className="comment-form-container">
          {this.renderErrors()}
          <form id="comment-form" onSubmit={this.handleSubmit} className="session-form comment">
            <textarea form="comment-form"
              placeholder='Share you knowledge!'
              value={this.state.body}
              onChange={this.update()}
              className="comment-input" />

              <input type="submit"
                className="session-form-button comment"
                value={"Add Comment"} />
            </form>
        </div>
      </div>
    );
  }
}



export default Comments;
