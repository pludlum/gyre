import React from 'react';



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
      <div className="annotation-detail-column">
        <div className="annotation-body-container">
          <p className="annotation-body">{this.props.annotation.body}</p>
          <p className="annotation-author"> - {this.props.annotation.username}</p>
          <div className="like-buttons-container">
            <span className="rating-span" > Rating: {`${this.props.annotation.rating}`} </span>
            <span onClick={this.handleDelete} className="delete-button"> Delete </span>

          <i className="fa fa-thumbs-o-up"></i>
          </div>
        </div>
      </div>
    );
  }
}


export default AnnotationDetail;
