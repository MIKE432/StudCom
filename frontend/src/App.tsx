import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/StylesToExport.scss';
import Router from './routes/routerComponent';
import NavBar from './components/NavBar/NavBar';

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
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
