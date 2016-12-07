import React, {Component} from 'react';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';

import AppLayout from './AppLayout';
import Dashboard from './Dashboard';
import ContactsList from './contacts/Contacts';
import ContactDetails from './contacts/ContactDetails';

export default
class AppRouter extends Component {
  render () {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={AppLayout}>
          <IndexRedirect to='dashboard'/>
          <Route path='dashboard' component={Dashboard}/>

          <Route path='contacts' component={ContactsList}>
            <Route path='/:contactId' component={ContactDetails} />
          </Route>
        </Route>
      </Router>
    );
  }
}