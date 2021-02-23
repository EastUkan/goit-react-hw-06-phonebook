import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Title from './components/Title';
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
