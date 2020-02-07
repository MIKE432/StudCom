import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/StylesToExport.scss'
import Router from './routes/routerComponent'

class App extends React.Component {

  constructor(props: Record<string, any>) {
    super(props);

    this.state = {
      isUserLoggendIn: false
    };
  }

  userLogIn = () => { this.setState({ isUserLoggendIn: true }); }

  userLogOut = () => { this.setState({ isUserLoggendIn: false }); }

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
