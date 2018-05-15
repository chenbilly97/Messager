import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Navigationbar from './components/navigationbar';
import Contacts from './components/contacts';
import Chat from './components/chat';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import './AppState';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigationbar/>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/singup' component={Signup}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/chat/:user/:friend/:sessionId' component={Chat}/>)}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
