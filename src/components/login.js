import React , {Component} from 'react';
import '../css/login.css';
import logo from '../assets/whatsapp.jpg';

class Login extends Component {
   constructor (props)
   {
     super(props);
     this.state = ({'Username':'','Password':''});
     this.onUsernameChange = this.onUsernameChange.bind(this);
     this.onPasswordChange = this.onPasswordChange.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
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
   
   onFormSubmit (event)
   {
     event.preventDefault();
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
            onClick={this.onFormSubmit}>Login</button>
        </div>  
        <div>  
        <button >
        Signup
      </button>    
        </div>    
       </form>
     );
   }
   
   render(){
     return (
       <div className="login"> 
         <img src={logo} alt="Smiley face" className="img" height="200" width="200"/>
         {this.renderLoginForm()}
       </div>
     );
   }
}

export default Login;