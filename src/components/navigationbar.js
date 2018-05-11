import React from 'react';
import  '../css/navigationbar.css';

function Navigationbar(props) {
    const user = props.user;
    const profileUrl = `/profile/${user}`;
    const contactsUrl = `/contacts/${user}`;
    return  (
      <div className="navbar">
        <a href="/login">Home</a>
        <a href={contactsUrl}>Contacts</a>
        <div>
        <a href={profileUrl}>Profile</a>
        </div>
      </div>
    );
  }

  export default Navigationbar;