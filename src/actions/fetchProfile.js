import axios from 'axios';

export const FETCH_PROFILE = 'FETCH_PROFILE';

export default function fetchProfile (user) {
    const url = `https://qm3j2u612l.execute-api.us-east-1.amazonaws.com/prod/profile/${user}`;
    const request = axios.get(url);
    return {
        type: FETCH_PROFILE,
        payload: request
    }
 }