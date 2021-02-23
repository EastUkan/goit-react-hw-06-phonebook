import { Component } from 'react';
import phonebookActions from '../../redux/phonebook-actions';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state);

    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        Name{' '}
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleNameChange}
        />
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleNumberChange}
        />
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};

const mapDispatchToProps = {
  onAddContact: phonebookActions.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
