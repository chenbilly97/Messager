import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import Navigationbar from './components/navigationbar';
import Contacts from './components/contacts';
import Chat from './components/chat';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import './AppState';



class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = ({"username":'chenbilly97'});
  }
  render() {
    const user = this.state.username;
    return (
      <div className="App">
      <Navigationbar user = {user}/>
      <Router>    
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile/:user' component={Profile}/>
          <Route path='/contacts/:user' component={Contacts}/> 
          <Route path='/chat/:user/:friend/:sessionId' component={Chat}/>)}/>      
        </Switch>
      </Router>
      </div>
    );
  }
   
}

export default App;

