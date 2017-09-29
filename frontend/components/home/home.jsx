import React from 'react';
import PoetItem from '../poets/poet_index_item';
import TopPoemIndexContainer from '../poems/top_poem_container';
import { Link } from 'react-router-dom';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoets();
  }

  render () {
    let poetItemList = this.props.poets.map( poet => (
      <PoetItem key={`poet-item-${poet.id}`} poet={poet} />
    ));

    return (
      <div className="poet-index-component">
        <div className="poet-index-title-box">
          <span className="poet-index-title">Popular Poets</span>
        </div>
        <span className="divider" ></span>
        <div className="poet-index-box">
          <ul className="poet-index-list">
            {poetItemList.slice(0,3)}
          </ul>
        </div>
        <Link to="/poets" className="session-link-button poets" >
          <span >Browse All Poets</span>
        </Link>
        <TopPoemIndexContainer />
      </div>
    );
  }
}


export default Homepage;
