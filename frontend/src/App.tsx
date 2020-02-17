import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/StylesToExport.scss';
import Router from './routes/routerComponent';
import NavBar from './components/core/NavBar/NavBar';
import { User } from './types/userTypes';
import { getCurrentUser } from './rest/requests/User'

export const userManagementMethods = {
  loginUser: (user: User | null) => {},
  logoutUser: () => {}
}

class App extends React.Component<Record<string, any>, Record<string, any>> {

  constructor(props: Record<string, any>) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
      currentUser: null
    };
    userManagementMethods.loginUser = this.loginUser;
    userManagementMethods.logoutUser = this.logoutUser;
  }

  componentDidMount() {
    getCurrentUser().then(res => {
      if(res.status === 200) {
        this.setState({isUserLoggedIn: true, currentUser: res.data})
      } else {
        this.setState({isUserLoggedIn: false, currentUser: res.data})
      }
    })
  }
  
  loginUser = (user: User | null) => {
    this.setState({ isUserLoggedIn: true, currentUser: user });
  }

  logoutUser = () => {
    this.setState({ isUserLoggedIn: false, currentUser: null });
  }

  render() {
    return (
      <div>
        {
          console.log(this.state.currentUser)
        }
        <BrowserRouter>
          <NavBar />
          <Router logoutUser={this.logoutUser} loginUser={this.loginUser}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App