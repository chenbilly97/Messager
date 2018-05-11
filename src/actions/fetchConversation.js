import axios from 'axios';

export const FETCH_CONVERSATION = 'FETCH_CONVERSATION';

export default function fetchConversation (id) {
    const url = `https://qm3j2u612l.execute-api.us-east-1.amazonaws.com/prod/conversations/${id}`;
    const request = axios.get(url);
    return {
        type: FETCH_CONVERSATION,
        payload: request
    }
 }