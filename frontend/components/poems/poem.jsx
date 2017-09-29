import React from 'react';


class Poem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStart: null,
      selectionEnd: null
    };

    this.displayAnnotation = this.displayAnnotation.bind(this);
    this.grabSelection = this.grabSelection.bind(this);
  }




  findAnnoIndexes() {
    this.startIdxs = [];
    this.endIdxs = [];

    this.props.annotations.forEach( (annotation) => {
      this.startIdxs.push([annotation.start_idx, annotation.id]);
      this.endIdxs.push([annotation.end_idx, annotation.id]);
    });
  }





  displayAnnotation(e) {
    e.preventDefault();
    this.props.fetchAnnotation(e.currentTarget.id);
  }

  grabSelection(e) {
    e.preventDefault();
    let start = window.getSelection().anchorOffset;
    let end = window.getSelection().focusOffset;

    if (start === end) return;

    if (end < start) {
      let temp = start;
      start = end;
      end = temp;
    }

    // FIND CURRENT SPAN
    let spanNum = (e.currentTarget.getAttribute('name')) * 1;

    // ITERATE THROUGH THE PREVIOUS SPANS, ADD THEIR LENGTH TO
    // SELECTION COUNT
    for (let i = 0; i < spanNum; i++) {
      let currentSpan = document.getElementsByName(i);
      let spanLength = currentSpan[0].innerHTML.length;

      start += spanLength;
      end += spanLength;
    }


    this.setState({
      selectionStart: start,
      selectionEnd: end,
    });
    this.props.handleSelection(start, end);
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
                                  name={`${spanKey}`}
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
                                  name={`${spanKey}`}
                                  id={this.endIdxs[i][1]}
                                  className={`annotated`}
                                  onClick={this.displayAnnotation}
                                  >{currentText}</span>);
              currentText = "";
              spanKey++;
            }
          }
        }
        currentText += this.props.poemBody[currentIdx];
        currentIdx++;
      }

      return allSpans;

    } else {
      /// NO ANNOTATIONS MEANS RETURN FULL TEXT
      return <span name="0" onClick={this.grabSelection} className="unannotated" >{this.props.poemBody}</span>;
    }
  }



  render() {

    if (this.props.poemBody === undefined) return null;

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
