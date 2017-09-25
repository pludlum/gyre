import React from 'react';


class Poem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: [],
    };
  }



  render() {
    console.log(this.props);
    return (
      <div>
        <p className="poem-body">{this.props.poemBody}</p>
      </div>
    );
  }
}



export default Poem;
