import { React, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { deleteComment } from '../reducers/actions'
import Comment from './Comment'

function CommentList({blogId, handleDeleteComment}){
    const dispatch = useDispatch()
    const blogComments = useSelector((store) => store.blogs[blogId].comments)
    // const blogComments = Object.keys(blogComments)
    if(blogComments == undefined || blogComments.length < 1) {
        return (
            <h4>No comments...</h4>
        )
    }

    // function handleDeleteComment(commentId) {
    //     dispatch(deleteComment(blogId, commentId))
    //     const index = blogComments.indexOf(commentId)
    //     blogComments.splice(index, 1)
    // }

    return(
        <ul>
            {blogComments.map(comment => {
                console.log(comment)
                return (
                    <li key={`li-${comment.id}`}>
                        <Comment 
                            deleteFunction={() => handleDeleteComment(comment.id)}
                            key={comment.id}
                            comment={comment.text}
                        />
                    </li>
                )
            })}       
        </ul>
    )
}

export default CommentList