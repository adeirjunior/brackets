import {GET_POSTS, POSTS_ERROR} from '../types'
import axios from 'axios';

export const getPosts = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_POSTS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: POSTS_ERROR,
            payload: error,
        })
    }

}