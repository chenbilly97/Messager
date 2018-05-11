import {combineReducers} from 'redux';
import ProfileReducer from './reducer_profile';
import FriendListReducer from './reducer_friends';
import ConversationReducer from './reducer_conversation';

const rootReducer = combineReducers({
   profile:ProfileReducer,
   friends:FriendListReducer,
   conversation:ConversationReducer
});

export default rootReducer;
