import React from 'react';
import PoemItem from './poem_index_item';


class PoemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoems(this.props.poetId);
  }

  render () {

    if (this.props.poems.length === 0) {
      return null;
    }
    console.log(this.props.poems);

    let poemItemList = this.props.poems.map( poem => (
      <PoemItem key={`poem-item-${poem.id}`} poem={poem} />
    ));

    return (
      <div className="poem-index-component">
        <div className="poem-index-title-box">
          <span className="poem-index-title">All Poems</span>
        </div>
        <span className="divider poem-index" ></span>
        <div className="poem-index-box">
          <ul className="poem-index-list">
            {poemItemList}
          </ul>
        </div>
      </div>
    );
  }
}


export default PoemIndex;
