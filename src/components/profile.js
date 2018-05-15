import React , {Component} from 'react';
import { Redirect } from 'react-router-dom'
import '../css/profile.css';
import {connect} from 'react-redux';
import fetchProfile from '../actions/fetchProfile';
import {bindActionCreators} from 'redux';
import getCookie  from '../cookies';

 class Profile extends Component  {
    constructor (props)
    {
      super(props);
      this.state = ({'user':'','sex':props.profile.sex,'age':'','race':''});
    }

    componentWillMount() {
      this.props.fetchProfile(getCookie('user'));
    }


    render () {
        if (getCookie('user') === '')
        {
          alert ('Please Sign in ');
          return <Redirect to='/login' />
         }
        const profile = this.props.profile.pop();
        if (profile === undefined)
          return <div> <h1>Loading ...</h1> </div>
        return (
          <div>
            <form>
             <div className="form-group">
             <div className="formComponent">
             <label >Username </label>
              <input type="text"
                 className=" col-sm-4 input"
                 value = {getCookie('user')}
                 readOnly />
             </div>
             <div className="formComponent">
             <label >Sex </label>
              <input type="text"
                 className=" col-sm-4 input"
                 value = {profile.sex}
                 readOnly  />
             </div>
            <div className="formComponent">
            <label >Age </label>
              <input type="text"
                 className=" col-sm-4 input"
                 value = {profile.age}
                 readOnly  />
             </div>
             <div className="formComponent">
            <label >Race </label>
              <input type="text"
                 className=" col-sm-4 input"
                 value = {profile.race}
                 readOnly  />
             </div>
            </div>
       </form>
          </div>
        );
    }
}

function mapStateToProps ({profile,user})
{
  return {profile,user};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchProfile},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps) (Profile);
