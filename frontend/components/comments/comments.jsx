import React from 'react';


class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.annotationId);
  }

  render() {
    if (this.props.comments.length === 0) return null;


    return (
      <div>
        <ul>
          <li>{this.props.comments[0].body}</li>
        </ul>
        <div>
          <p>form goes here</p>
        </div>
      </div>
    );
  }
}



export default Comments;
