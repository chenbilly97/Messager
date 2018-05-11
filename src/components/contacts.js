import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchFriends from '../actions/fetchFriendList';
import fetchConversation from '../actions/fetchConversation';

class Contacts extends Component {

    constructor (props)
    {
      super(props);
      this.state = ({'user':props.match.params.user});
      this.renderFriends = this.renderFriends.bind(this);
    }

   componentWillMount() {
        this.props.fetchFriends(this.state.user);

      }
   
   renderFriends (data) {
        const url = `/chat/${this.state.user}/${data.friend}/${data.sessionId}`;
        return (
          <tr key={data.friend}>
            <td> <a href={url}>{data.friend}</a></td>
            </tr>
          );
      } 
  
      render () {
       const fs = this.props.friends[0];
       if (fs=== undefined)
         return <div><h1>Loading...</h1></div>;  
       else if (fs.Items === undefined)
         return <div><h1>Cannot find Friend List</h1></div>;   
        
       const friends = fs.Items[0].friends.SS;
       const sessionIds = fs.Items[0].sessionId.SS;
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

function mapStateToProps ({friends,conversation})
{
  return {friends,conversation};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchFriends,fetchConversation},dispatch);
}


export default connect (mapStateToProps,mapDispatchToProps) (Contacts);