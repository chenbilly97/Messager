import React , {Component} from 'react';
import '../css/authentication.css';
import logo from '../assets/whatsapp.jpg';
import {getCognitoUser,AmazonCognitoIdentity} from '../CognitoConfiguration';
import getCookie , {setCookie,removeCookie} from '../cookies';

class Login extends Component {
   constructor (props)
   {
     super(props);
     this.state = ({'Username':'','Password':''});
     this.onUsernameChange = this.onUsernameChange.bind(this);
     this.onPasswordChange = this.onPasswordChange.bind(this);
     this.onLoginSubmit = this.onLoginSubmit.bind(this);
     this.onSingupClick = this.onSingupClick.bind(this);
   }

   nextPath(path) {
       this.props.history.push(path);
     }

   onUsernameChange (event)
   {
     event.preventDefault();
     this.setState({'Username':event.target.value});
   }

   onPasswordChange (event)
   {
     event.preventDefault();
     this.setState({'Password':event.target.value});
   }

   onLoginSubmit (event)
   {
     event.preventDefault();
     const authenticationData = {
      Username : this.state.Username,
      Password : this.state.Password
     };
     var token = '';
     var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
     const that = this;
     getCognitoUser().authenticateUser(authenticationDetails, {
       onSuccess: function (result) {
           token = result.getAccessToken().getJwtToken();
           setCookie('user',that.state.Username);
           setCookie('token',token);
       },
       onFailure: function(err) {
           alert(err.message || JSON.stringify(err));
       }
   });
     setTimeout(function () {
       that.nextPath('/contacts');
     }, 2000);
   }

   onSingupClick (event)
   {
     event.preventDefault();
     this.nextPath('singup');
   }


  renderLoginForm (){
     return (
       <form>
        <div className="form-group">
          <label >Username </label>
          <input type="text"
                 className="form-control col-sm-8 input"
                 placeholder="Username"
                 onChange= {this.onUsernameChange}/>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="text"
                 className="form-control col-sm-8 input"
                 placeholder="Password"
                 onChange={this.onPasswordChange}/>
        </div>
        <div>
        <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onLoginSubmit}>Login</button>
        </div>
        <div className="signupBtn">
        <button
            type="submit"
            className="btn btn-primary"
            onClick = {this.onSingupClick}
            to='/signup'>Singup</button>
        </div>
       </form>
     );
   }

   render(){
     if (getCookie('user')!==undefined)
     {
         removeCookie('user');
         removeCookie('token');
       }
     return (
       <div>
         <img src={logo} alt="Smiley face" className="img" height="200" width="200"/>
         {this.renderLoginForm()}
       </div>
     );
   }
}

export default Login;
