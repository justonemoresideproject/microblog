// import { axios } from 'react'
import axios from 'axios'

import { INPUT_BLOG, INPUT_COMMENT, DELETE_BLOG, DELETE_COMMENT, LOAD_BLOGS } from "./actionTypes"

const URL = 'http://localhost:5000/'

export function getBlogsFromApi() {
    return async function(dispatch) {
        try {
            let res = await axios.get(`${URL}api/posts/`)
            dispatch(loadBLOGS(res.data))
        } catch (e) {
            return console.log(e)
        }
    }
}

export function getBlogFromApi(id){
    return async function(dispatch) {
        try {
            let res = await axios.get(`${URL}api/posts/${id}`)
            dispatch(inputBlog(res.data))
        } catch (e) {
            return console.log(e)
        }
    }
}

export function loadBLOGS(data){
    return {
        type: LOAD_BLOGS,
        data
    }
}

export function inputBlog(data){
    console.log(data)
    return {
        type: INPUT_BLOG,
        data
    }
}

export function deleteBlog(id){
    return {
        type: DELETE_BLOG,
        id
    }
}

export function inputComment(data){
    return {
        type: INPUT_COMMENT,
        data
    }
}

export function deleteComment(blogId, commentId){
    return {
        type: DELETE_COMMENT,
        blogId,
        commentId
    }
}