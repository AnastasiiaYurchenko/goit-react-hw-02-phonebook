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

  addContact = newContact => {
    console.log(newContact);
    // console.log(prevState);
    // this.setState(prevState => ({
    //   contacts: [...prevState, newContact],
    // }));
  };

  render() {
    return (
      <Layout>
        <ContactsForm onSave={this.addContact} />
        <ContactsList />
        <GlobalStyle />
      </Layout>
    );
  }

  // return
  //   <div>React homework template</div>
}
