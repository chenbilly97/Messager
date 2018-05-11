import {FETCH_CONVERSATION}  from '../actions/fetchConversation';

export default function (state=[],action) {
    switch (action.type)
    {
        case FETCH_CONVERSATION:
          console.log("fetching conversation");
          return [action.payload.data];
        default: 
          return state;
    }
}