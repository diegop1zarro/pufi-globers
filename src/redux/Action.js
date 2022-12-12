import axios from 'axios';

export const POST_FORM = 'POST_FORM';

export const sendForm = (payload)=>{
    return async (dispatch) => {
        try {
           const postEmail = await axios.post('https://formspree.io/f/xnqreozb', payload)
           return dispatch({type: POST_FORM, payload:postEmail})              
        } catch (error) {
            console.log(error)
        }
    }
};