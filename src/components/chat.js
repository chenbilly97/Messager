import React , {Component} from 'react';
import '../css/chat.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchConversation from '../actions/fetchConversation';
import axios from 'axios';

class Chat extends Component {

    constructor (props) {
        super(props);
        this.state = ({'user':props.match.params.user,
                       'friend':props.match.params.friend,
                       'sessionId':props.match.params.sessionId,
                       'message':''});
        this.renderChatBody = this.renderChatBody.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        const that = this;
        setInterval(function() {that.props.fetchConversation(that.state.sessionId);} , 1000);
    }

    componentWillMount() {
        this.props.fetchConversation(this.state.sessionId);
      }

    renderChatBody (messageData)
    {
       const time = new Date(messageData.time);
       //console.log(messageData.sender+":"+this.state.user);
        if (messageData.sender !== this.state.user)
        {
          return (
                <div key={messageData.time}>
                    <div className="message incoming" >
                        <img className="avatar" src="https://placeimg.com/50/50/people?1" alt=""/>
                        <div className="datetime">{time.toLocaleTimeString()+" "+time.toDateString()}</div>
                        <p>{messageData.message}</p>
                    </div>
                 </div>
           );
        }
        else {
            return (
                 <div key={messageData.time}>
                    <div className="message outgoing" >
                        <img className="avatar" src="https://placeimg.com/50/50/people?1" alt=""/>
                        <div className="datetime">{time.toLocaleTimeString()+" "+time.toDateString()}</div>
                        <p>{messageData.message}</p>
                    </div>
             </div>
           );
        }
   }

   onInputChange (event)
   {
       event.preventDefault();
       this.setState({message:event.target.value});
   }

   onSubmit (event)
   {
       const fetchConversation = this.props.fetchConversation;
       const sessionId = this.state.sessionId;
       event.preventDefault();
       const url = `https://qm3j2u612l.execute-api.us-east-1.amazonaws.com/prod/conversations/${this.state.sessionId}?message=${this.state.message}&sender=${this.state.user}`;
       axios.post(url,{}).then (function () {fetchConversation(sessionId)});
       this.setState({'message':''});
   }

    render () {

        if (this.props.conversation.length === 0)
          return <div><h1>Loading ... </h1></div>
        console.log(this.props.conversation);
        const messages = this.props.conversation[0].messages;
        return (
          <div className="container">
            <div className="chat-container">
               {messages.map(this.renderChatBody)}
            </div>


            <div className=" messageBox" >
               <input
               placeholder="Enter your message"
               className="form-control"
               value={this.state.message}
               onChange={this.onInputChange}
               />
              <button type="submit"
                      className="btn btn-secondary"
                      onClick = {this.onSubmit}
                      >Send</button>
          </div>
         </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchConversation},dispatch);
  }

function mapStateToProps ({conversation})
{
  return {conversation};
}


export default connect(mapStateToProps,mapDispatchToProps) (Chat);
