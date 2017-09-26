import React from 'react';



class AnnotationDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.annotation === undefined) return null;

    return (
      <div className="annotation-detail-column">
        <div className="annotation-body-container">
          <p className="annotation-body">{this.props.annotation.body}</p>
          <p className="annotation-author"> - {this.props.annotation.username}</p>
          <div className="like-buttons-container">
            <span className="rating-span" > Rating: 0 </span>

          <i class="fa fa-thumbs-o-up"></i>
          </div>
        </div>
      </div>
    );
  }
}


export default AnnotationDetail;
