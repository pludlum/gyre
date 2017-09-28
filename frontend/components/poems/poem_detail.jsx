import React from 'react';
import Poem from './poem';
import AnnotationDetailContainer from '../annotations/annotations_detail_container';
import AnnotationFormContainer from '../annotations/annotations_form_container';


class PoemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: this.props.annotations,
      selectionStart: null,
      selectionEnd: null,
      formDisplay: false,
      annoDisplay: false,
      annoButton: false,
      selectionOK: true,
      update: ""
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.update = this.update.bind(this);
    this.findHeight = this.findHeight.bind(this);
    this.startAnnotation = this.startAnnotation.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }


  componentDidMount() {
    this.props.removeAnnotation();
    this.props.fetchPoet(this.props.poetId);
    this.props.fetchPoem(this.props.poemId);
    this.props.fetchAnnotations(this.props.poetId, this.props.poemId);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({annotations: nextProps.annotations});
    }

    if (nextProps.currentAnno.length > 0 ) {
      this.setState({annoDisplay: true, formDisplay: false, annoButton: false});
    } else {
      this.setState({annoDisplay: false});
    }
  }

  findHeight(e) {
    this.height = e.nativeEvent.offsetY;
  }

  update() {
    this.props.fetchAnnotations(this.props.poetId, this.props.poemId);
    this.setState({update: Date.now()});
  }

  handleSelection(start, end) {
    if (this.state.selectionOK) {
      this.setState({selectionStart: start, selectionEnd: end, annoButton: true, annoDisplay: false});
    }
  }

  startAnnotation(e) {
    e.preventDefault();
    this.props.annotations.push({start_idx: this.state.selectionStart,
                                end_idx: this.state.selectionEnd,
                                id: -1});
    this.setState({annoButton: false, formDisplay: true, selectionOK: false});

  }

  cancelForm() {
    this.setState({formDisplay: false, selectionOK: true});
    this.props.fetchAnnotations(this.props.poetId, this.props.poemId);
  }



  render() {
    if (this.props.poem === undefined || this.props.poet === undefined) return null;

    let nameArray = this.props.poet.name.split(' ');
    let lastName = nameArray[nameArray.length-1];
    let annotationSpace = null;


    if (this.state.annoDisplay === true) {
      annotationSpace = <AnnotationDetailContainer key={Date.now}
                                                   height={this.height} />;
    } else if (this.state.formDisplay) {
      annotationSpace = <AnnotationFormContainer key ={Date.now()}
                                                 start={this.state.selectionStart}
                                                 end={this.state.selectionEnd}
                                                 poemId={this.props.poemId}
                                                 poetId={this.props.poetId}
                                                 update={this.update}
                                                 yOffset={this.yOffset}
                                                 height={this.height}
                                                 cancelForm = {this.cancelForm}/>;
   } else if (this.state.annoButton) {
     annotationSpace = <button className="start-anno-button"
                               onClick={this.startAnnotation}
                               style={{marginTop: this.height + 140 }}
                               >Start Annotation</button>;
   }

    return (
      <div className="poet_detail_container" >
        <div className="banner-container">
          <div className="banner-img-container" >
            <img className="banner-img" src={this.props.poet.banner_url} />
          </div>
        </div>

        <div className="poet-portrait-container">
          <div className="poet-portrait-frame">
            <img className="poet-portait" src={this.props.poet.img_url} ></img>
          </div>
        </div>

        <div className="banner-name-container" >
          <p className="banner-name">{lastName}</p>
        </div>

        <div className="poem-show-body-container ">
          <div className="poet-description-container poem" onClick={this.findHeight}>
            <h3 className="poet-name poem">{this.props.poem.title}</h3>
            <h2 className="poet-name poem author">by {this.props.poem.author}</h2>
            <Poem poemBody={this.props.poem.body}
                  annotations= {this.state.annotations}
                  fetchAnnotation={this.props.fetchAnnotation}
                  handleSelection={this.handleSelection}
                  update={this.update} />
          </div>
          <div className="annotation-column">
            <div className="annotation-container">
              {annotationSpace}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default PoemDetail;
