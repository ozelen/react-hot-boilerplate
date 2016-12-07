import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default
class Contact extends Component {
  render () {
    return (
      <ListItem
        primaryText={this.props.name}
        leftAvatar={<CommunicationCall />}
        rightIcon={<CommunicationChatBubble />} />
    );
  }
}

// https://github.com/ozelen/