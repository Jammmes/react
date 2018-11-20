import {ADD_POST, GET_POSTS, GET_POST_BY_ID} from '../constants/postsConstants';
import axios from 'axios';

export function getPost(){
    return {
        type: GET_POSTS,
        payload: axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

export function getPostById(idPost){
    return {
        type: GET_POST_BY_ID,
        payload: idPost
    }
}

export function addPost(author,title,text) {
    return{
        type: ADD_POST,
        payload: {
            author:author,
            title:title,
            text:text
        }
    }
}