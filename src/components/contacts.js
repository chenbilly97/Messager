import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchFriends from '../actions/fetchFriendList';
import fetchConversation from '../actions/fetchConversation';
import getCookie , {setCookie} from '../cookies';
class Contacts extends Component {

    constructor (props)
    {
      super(props);
      this.renderFriends = this.renderFriends.bind(this);
      this.setCookies = this.setCookies.bind(this);
      this.state = ({'user':''});
    }

   componentWillMount() {
      this.props.fetchFriends(getCookie('user'));
      }

   setCookies(friend,sessionId)
   {
     setCookie(friend,sessionId);
     setCookie('friend',friend);
     setCookie('selectedSession',sessionId);
     this.props.history.push('/chat');
   }
   renderFriends (data) {
     const that = this;
        return (
          <tr key={data.friend.S} onClick ={ ()=>that.setCookies(data.friend.S,data.sessionId.S)}>
            <td >{data.friend.S}</td>
            </tr>
          );
      }

      render () {
       const fs = this.props.friends[0];
       if (fs=== undefined)
         return <div><h1>Loading...</h1></div>;
       else if (fs.Items === undefined)
         return <div><h1>Cannot find Friend List</h1></div>;

       const friends = fs.Items[0].friends.L;
       const sessionIds = fs.Items[0].sessionId.L;
       const length = friends.length;
       var data =  [];
       for (var i=0;i<length;i++)
       {
          data.push ({friend:friends[i],sessionId:sessionIds[i]});
       }
       return (
          <div className="messageTable">
              <table className="table">
                <thead>
                    <tr>
                      <th scope="col">User</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map(this.renderFriends)}
                </tbody>
              </table>
          </div>
       );
   }
}

function mapStateToProps ({friends,conversation,user})
{
  return {friends,conversation,user};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchFriends,fetchConversation},dispatch);
}


export default connect (mapStateToProps,mapDispatchToProps) (Contacts);
