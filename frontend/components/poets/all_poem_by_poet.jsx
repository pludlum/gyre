import React from 'react';
import PoemIndexContainer from '../poems/poem_index_container';
import { Link } from 'react-router-dom';

class allPoems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoet(this.props.match.params.poetId);
  }

  render() {

    if (this.props.poet === undefined) return null;
    let nameArray = this.props.poet.name.split(' ');
    let lastName = nameArray[nameArray.length-1];

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

        <PoemIndexContainer poetId={this.props.poetId} />

      </div>
    );
  }

}



export default allPoems;
