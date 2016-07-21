import { connect } from 'react-redux';
import { submitQuery } from '../actions';
import SearchFormComponent from '../components/SearchForm';

const mapDispatchToProps = {
  onSubmit: submitQuery
};

const SearchForm = connect(
  () => { return {} },
  mapDispatchToProps
)(SearchFormComponent);

export default SearchForm;
