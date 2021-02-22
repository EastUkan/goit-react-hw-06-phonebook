import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Title from './Title/Title';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <CSSTransition
            in={true}
            appear={true}
            classNames="transition"
            timeout={500}
            unmountOnExit
          >
            <Title title="Form Contact" />
          </CSSTransition>

          <ContactForm />
          <Title title="Contacts List" />

          <Filter />

          <ContactsList />
        </div>
      </>
    );
  }
}
