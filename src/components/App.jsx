import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <Layout>
        <ContactsForm />
        <ContactsList />
        <GlobalStyle />
      </Layout>
    );
  }

  // return
  //   <div>React homework template</div>
}
