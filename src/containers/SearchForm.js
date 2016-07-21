import { connect } from 'react-redux';
import { setQuery } from '../actions';
import SearchFormComponent from '../components/SearchForm';

const mapDispatchToProps = {
  onSubmit: setQuery
};

const SearchForm = connect(
  () => { return {} },
  mapDispatchToProps
)(SearchFormComponent);

export default SearchForm;
