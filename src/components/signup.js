import React , {Component} from 'react';
import logo from '../assets/whatsapp.jpg';
import '../css/authentication.css';
import getUserPool from '../CognitoConfiguration';

class Signup extends Component {
   constructor(props)
   {
     super(props);
     this.state = {'userPool':getUserPool(),'user':'','password':''};
     this.onSingupSubmit = this.onSingupSubmit.bind(this);
     this.onUsernameChange = this.onUsernameChange.bind(this);
     this.onPasswordChange = this.onPasswordChange.bind(this);
   }
   
   onUsernameChange (event)
   {
       event.preventDefault();
       this.setState({'user':event.target.value});
   }

   onPasswordChange (event)
   {
       event.preventDefault();
       this.setState({'password':event.target.value});
   }

   onSingupSubmit (event)
   {
       event.preventDefault();
       this.state.userPool.Pool.signUp(this.state.user, this.state.password, [], null, function(err, result){
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        const cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
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
           onClick={this.onSingupSubmit}>Singup</button>
       </div>  
      </form>
    );
  }

   render (){
       
       return (
          <div > 
             <img src={logo} alt="Smiley face" className="img" height="200" width="200"/>
             {this.renderLoginForm()}
          </div>
       );
   }
}

export default Signup;