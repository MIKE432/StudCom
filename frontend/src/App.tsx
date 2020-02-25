import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/StylesToExport.scss';
import Router from './routes/routerComponent';
import NavBar from './components/core/NavBar/NavBar';
import { getUser } from './state/actions/userActions';
import { select } from './state/actions/generalAction';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch: any) => ({
  getUser: () => dispatch(getUser()),
});

const mapStateToProps = (state: any) => ({
  user: select(state, 'user'),
})

class App extends React.Component<Record<string, any>, Record<string, any>> {

  constructor(props: Record<string, any>) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
      currentUser: null
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Router isUserLoggedIn={this.props.user ? true : false}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)