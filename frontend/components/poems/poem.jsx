import React from 'react';


class Poem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStart: null,
      selectionEnd: null,
      selection: null,
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {
    e.preventDefault();
    let start = window.getSelection().anchorOffset;
    let end = window.getSelection().focusOffset;
    let selection = window.getSelection();

    this.setState({
      selectionStart: start,
      selectionEnd: end,
      selection: selection
    });
  }



  render() {
    console.log(this.state.selectionStart);
    console.log(this.state.selectionEnd);
    console.log(this.state.selection);
    return (
      <div>
        <p className="poem-body"><span onClick={this.handleSelection} className="unannotated" >{this.props.poemBody}</span></p>
      </div>
    );
  }
}



export default Poem;
