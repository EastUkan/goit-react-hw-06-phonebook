import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import phonebookActions from '../redux/phonebook-actions';

function ContactsList({ contacts, onRemoveContact }) {
  // if (contacts.length === 0) return null;
  return (
    <TransitionGroup component="ul">
      {contacts.map(({ id, item }) => {
        return (
          <CSSTransition id={id} timeout={250} classNames={styles}>
            <li key="id" className={styles.item}>
              <div className={styles.itemTitle}>
                {item.name}:{item.number}
              </div>
              <button
                className={styles.button}
                onClick={() => onRemoveContact(id)}
              >
                delete
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onRemoveContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items.filter(contact =>
    contact.item.name
      .toLowerCase()
      .includes(state.contacts.filter.toLowerCase()),
  ),
});

const mapDispatchToProps = {
  onRemoveContact: phonebookActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
