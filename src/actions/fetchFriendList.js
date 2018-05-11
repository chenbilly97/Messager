import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export default function fetchFriends (user) {
    const url = `https://qm3j2u612l.execute-api.us-east-1.amazonaws.com/prod/friends/${user}`;
    const request = axios.get(url);
    return {
        type: FETCH_FRIENDS,
        payload: request
    }
 }