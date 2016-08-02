import { connect } from 'react-redux';
import { submitArtistsQuery } from '../actions';
import SearchFormComponent from '../components/SearchForm';

const mapDispatchToProps = {
  onSubmit: submitArtistsQuery
};

const SearchForm = connect(
  () => ({}),
  mapDispatchToProps
)(SearchFormComponent);

export default SearchForm;
