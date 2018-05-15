import React,{Component} from 'react';
import  '../css/navigationbar.css';
import {connect} from 'react-redux';
import getCookie  from '../cookies';

class Navigationbar extends Component {
  render() {
    const user = getCookie('user');
    return  (
      <div className="navbar">
        <a href="/login">Home</a>
        <a href={`/contacts`}>Contacts</a>
        <div>
        <a href={`/profile`}>Profile</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({user})
{
  return {user};
}

  export default connect (mapStateToProps,null)(Navigationbar);
