import React from 'react';
import Poem from './poem';



class PoemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStart: null,
      selectionEnd: null,
      formDisplay: false,
      annoDisplay: false
    };

    this.handleSelection = this.handleSelection.bind(this);
  }


  componentDidMount() {
    this.props.fetchPoet(this.props.poetId);
    this.props.fetchPoem(this.props.poemId);
    this.props.fetchAnnotations(this.props.poetId, this.props.poemId);
  }

  componentWillReceiveProps() {
    console.log(this.props.currentAnno);
    if (this.props.currentAnno.length > 0 ) {
      this.setState({annoDisplay: true, formDisplay: false});
    }
  }

  handleSelection(start, end) {
    this.setState({selectionStart: start, selectionEnd: end, formDisplay: true, annoDisplay: false});
  }



  render() {

    if (this.props.poem === undefined) return null;

    let nameArray = this.props.poet.name.split(' ');
    let lastName = nameArray[nameArray.length-1];

    let annotationSpace = null;


    if (this.state.annoDisplay === true) {
      annotationSpace = <p> {this.props.currentAnno[0].body} </p>;
    } else if (this.state.formDisplay) {
      annotationSpace = <p> "form goes here!" </p>;
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
          <div className="poet-description-container poem">
            <h3 className="poet-name poem">{this.props.poem.title}</h3>
            <h2 className="poet-name poem author">by {this.props.poem.author}</h2>
            <Poem poemBody={this.props.poem.body}
                  annotations= {this.props.annotations}
                  fetchAnnotation={this.props.fetchAnnotation}
                  handleSelection={this.handleSelection} />
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
