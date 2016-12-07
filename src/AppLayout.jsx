import React, {Component} from 'react';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Style from './layout.less';

export default
class AppLayout extends Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
  }

  render () {
    const {children, location} = this.props;

    return (
      <MuiThemeProvider>
        <section>
          <AppBar title="App Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />

          <div>{children}</div>
        </section>
      </MuiThemeProvider>
    );
  }
}