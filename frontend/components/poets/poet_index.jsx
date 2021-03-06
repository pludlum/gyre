import React from 'react';
import PoetItem from './poet_index_item';
import TopPoemIndexContainer from '../poems/top_poem_container';


class PoetIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoets();
  }

  render () {
    let poet_item_list = this.props.poets.map( poet => (
      <PoetItem key={`poet-item-${poet.id}`} poet={poet} />
    ));

    return (
      <div className="poet-index-component">
        <div className="poet-index-title-box">
          <span className="poet-index-title">All Poets</span>
        </div>
        <span className="divider" ></span>
        <div className="poet-index-box">
          <ul className="poet-index-list">
            {poet_item_list}
          </ul>
        </div>
        <TopPoemIndexContainer />
      </div>
    );
  }
}


export default PoetIndex;
