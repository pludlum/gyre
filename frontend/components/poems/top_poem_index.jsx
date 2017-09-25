import React from 'react';
import TopPoemItem from './top_poem_index_item';


class TopPoemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopPoems();
  }

  render () {

    if (this.props.topPoems.length === 0) {
      return null;
    }
    console.log(this.props.topPoems);

    let poemItemList = this.props.topPoems.map( poem => (
      <TopPoemItem key={`poem-item-${poem.id}`} poem={poem} />
    ));

    return (
      <div className="poem-index-component">
        <div className="poem-index-title-box">
          <span className="poem-index-title">Notable Poems</span>
        </div>
        <span className="divider" ></span>
        <div className="poem-index-box">
          <ul className="poem-index-list">
            {poemItemList}
          </ul>
        </div>
      </div>
    );
  }
}


export default TopPoemIndex;
