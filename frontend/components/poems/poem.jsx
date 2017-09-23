import React from 'react';


class Poem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props);
    return (
      <p className="poem-body">{this.props.poemBody}</p>
    );
  }
}



export default Poem;
