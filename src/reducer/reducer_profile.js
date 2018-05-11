import {FETCH_PROFILE}  from '../actions/fetchProfile';

export default function (state=[],action) {
    switch (action.type)
    {
        case FETCH_PROFILE:
          console.log("fetching profile");
          return [action.payload.data];
        default: 
          return state;
    }
}