import React , {Component} from 'react';
import '../css/authentication.css';
import logo from '../assets/whatsapp.jpg';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCognitoUser,AmazonCognitoIdentity} from '../CognitoConfiguration';
import setLoginInfo from '../actions/setLoginInfo';
import getCookie , {setCookie} from '../cookies';

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
           const userInfo = {'LoginUser':that.state.Username,'token':token};
           that.props.setLoginInfo(userInfo);
           console.log(that.state.Username);
           setCookie('user',that.state.Username);
           setCookie('token',token);
       },
       onFailure: function(err) {
            setCookie('user','');
           alert(err.message || JSON.stringify(err));
       }
   });
     if (getCookie('user') === '')
         this.nextPath('/login');
      else
         this.nextPath('/contacts');
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
     return (
       <div>
         <img src={logo} alt="Smiley face" className="img" height="200" width="200"/>
         {this.renderLoginForm()}
       </div>
     );
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setLoginInfo},dispatch);
}

export default connect (null,mapDispatchToProps) (Login);
