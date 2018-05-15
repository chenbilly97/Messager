export const SET_LOGIN = 'SET_LOGIN';

export default function setLoginInfo (user) {
    return {
        type: SET_LOGIN,
        payload: user
    }
 }
