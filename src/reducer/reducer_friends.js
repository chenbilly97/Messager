import {FETCH_FRIENDS}  from '../actions/fetchFriendList';

export default function (state=[],action) {
    switch (action.type)
    {
        case FETCH_FRIENDS:
          console.log("fetching friendList");
          return [action.payload.data];
        default: 
          return state;
    }
}