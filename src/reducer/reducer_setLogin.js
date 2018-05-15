import {SET_LOGIN} from '../actions/setLoginInfo';

export default function (state=[],action) {
    switch (action.type)
    {
        case SET_LOGIN:
          console.log("Get Login Data");
          return [action.payload];
        default:
          return state;
    }
}
