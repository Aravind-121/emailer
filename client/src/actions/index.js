import axios from 'axios';
export const fetchUser = () => {
    return async (dispatch)=>{
        const res = await axios.get('/api/curruser');
        
        dispatch({type: 'FETCH_USER',payload: res.data});
    }
}

export const sendMailDetails = (data,history) => {
    return async (dispatch) => {
        const res = await axios.post('/api/create',data);
        history.push('/dashboard');

        dispatch({type: 'FETCH_USER', payload: res.data});
    }
}

export const fetchMails = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/mails');

        dispatch({type: 'FETCH_MAILS', payload: res.data});
    }
}

