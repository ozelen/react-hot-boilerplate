import React, {Component} from 'react';
import Contact from './Contact';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Container} from 'flux/utils';
import ContactsStore from './ContactsStore';

class ContactsList extends Component {

  constructor (props) {
    super(props);
  }

  static getStores () {
    return [ContactsStore];
  }

  static calculateState () {
    return {
      contacts: ContactsStore.getState().toArray()
    }
  }

  render () {
    return (
      <div>
        <h1>Contacts</h1>

        <List>
          <Subheader>Last used</Subheader>
          {this.state.contacts.map((contact, key) =>
            <Contact name={contact.name} key={key} />
          )}
        </List>
      </div>
    );
  }
}


const ContactsListContainer = Container.create(ContactsList);
export default ContactsListContainer;