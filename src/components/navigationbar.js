import React,{Component} from 'react';
import  '../css/navigationbar.css';
import {connect} from 'react-redux';

class Navigationbar extends Component {

  render() {
    return  (
      <div className="navbar">
        <a href={`/contacts`}>Contacts</a>
        <div>
        <a href={`/profile`}>Profile</a>
        </div>
        <div>
        <a href={`/login`}>Logoff</a>
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
