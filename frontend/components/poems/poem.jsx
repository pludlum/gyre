import React from 'react';


class Poem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStart: null,
      selectionEnd: null
    };


    this.handleSelection = this.handleSelection.bind(this);
  }


  findAnnoIndexes() {
    this.startIdxs = [];
    this.endIdxs = [];

    this.props.annotations.forEach( (annotation) => {
      this.startIdxs.push([annotation.start_idx, annotation.id]);
      this.endIdxs.push([annotation.end_idx, annotation.id]);
    });
  }

  grabSelection(e) {
    e.preventDefault();
    let start = window.getSelection().anchorOffset;
    let end = window.getSelection().focusOffset;

    this.setState({
      selectionStart: start,
      selectionEnd: end,
      selection: sel,
    });
  }


  // RENDER ALL POEM TEXT
  highlightAnnotations() {
    this.findAnnoIndexes();


    // SET UP TEXT TO BE PUSH INTO ANNO/NON-ANNO SPANS
    let currentText = "";
    let annoFlag = false;

    let allSpans = [];
    let spanKey = 0;


    // ITERATE THROUGH ALL TEXT CHECK FOR ANNO START/END INDEXES
    let currentIdx = 0;

    if (this.props.annotations.length > 0) {

      while (currentIdx < this.props.poemBody.length) {
        if (annoFlag === false) {
          for (let i = 0; i < this.startIdxs.length; i++) {
            if (this.startIdxs[i][0] === currentIdx || currentIdx === this.props.poemBody.length-1) {
              annoFlag = true;
              allSpans.push(<span key={`text-span-${spanKey}`}
                                  id={`${spanKey}`}
                                  className={`unannotated`}
                                  onClick={this.grabSelection}
                                  >{currentText}</span>);
              currentText = "";
              spanKey++;
            }
          }
        } else {
          for (let i = 0; i < this.startIdxs.length; i++) {
            if (this.endIdxs[i][0] === currentIdx) {
              annoFlag = false;
              allSpans.push(<span key={`text-span-${spanKey}`}
                                  id={`${spanKey}`}
                                  className={`annotated`}
                                  onClick={this.grabAnnotation()}
                                  >{currentText}</span>);
              currentText = "";
              spanKey++;
            }
          }
        }
        currentText += this.props.poemBody[currentIdx];
        currentIdx++;
      }
      console.log(allSpans);
      return allSpans;
    } else {
      /// NO ANNOTATIONS MEANS RETURN FULL TEXT
      return <span className="unannotated" >{this.props.poemBody}</span>;
    }
  }



  render() {
    console.log(this.state.selectionStart);
    console.log(this.state.selectionEnd);
    console.log(this.state.selection);
    console.log(this.props.annotations);

    return (
      <div>
        <p className="poem-body" >
          {this.highlightAnnotations()}
        </p>
      </div>
    );
  }
}



export default Poem;
