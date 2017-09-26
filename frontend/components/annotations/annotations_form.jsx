import React from 'react';


class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      user_id: this.props.userId,
      poem_id: this.props.poemId,
      start_idx: this.props.start,
      end_idx: this.props.end
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = [];
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body === "") {
      if (this.errors.length < 1) {
        this.errors.push("Annotation can't be blank!");
        this.setState({body: " "});
        this.setState({body: ""});
      }
      return;
    } else {
      this.errors = [];
    }
    const annotation = Object.assign({}, this.state);
    this.props.createAnnotation(annotation);
    this.props.fetchAnnotations(this.props.poetId, this.props.poemId);
    this.props.update();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }



  renderErrors() {

    if (this.errors.length > 0) {
      return(
        <ul className="errors-list" >
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

    return (
        <div className="annotation-form-container" style={{paddingTop: this.props.height}}>
          {this.renderErrors()}
          <form id="anno-form" onSubmit={this.handleSubmit} className="session-form">
            <textarea form="anno-form"
              placeholder='Share you knowledge!'
              value={this.state.username}
              onChange={this.update('body')}
              className="annotation-input" />

              <input type="submit"
                className="session-form-button annotation"
                value={this.props.formType + " Annotation"} />
            </form>
        </div>

    );
  }
}

export default AnnotationForm;
