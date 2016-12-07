import React, {Component} from 'react';
import Contact from './Contact';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default
class Contacts extends Component {

  constructor (props) {
    super(props)
    this.state = {
        contacts: [
        {name: 'Oleksiy'},
        {name: 'John'}
      ]
    }
  }

  render () {
    return (
      <div>
        <h1>Contacts</h1>

        <List>
          <Subheader>Last used</Subheader>
          {this.state.contacts.map((contact, key) =>
            <Contact {...contact} key={key} />
          )}
        </List>
      </div>
    );
  }
}