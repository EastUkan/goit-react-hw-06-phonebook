import styles from './Filter.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook-actions';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
      placeholder="Enter name for Search"
    ></input>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = {
  onChangeFilter: phonebookActions.findContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
