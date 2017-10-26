import { connect } from 'react-redux';
import { fetchResults, clearResults } from '../../actions/search_actions';
import SearchBar from './search_bar';
import { withRouter } from 'react-router';


const mapStateToProps = (state) => ({
  results: Object.values(state.search) || []
});

const mapDispatchToProps = dispatch => ({
  fetchResults: (query) => dispatch(fetchResults(query)),
  clearResults: () => dispatch(clearResults())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
