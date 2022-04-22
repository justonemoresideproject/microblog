import { React, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { inputComment } from '../reducers/actions'

function CommentForm({blogId}){

    const dispatch = useDispatch()

    const INITIAL_STATE = { 
        blogId: blogId, 
        commentId: '', 
        comment: '' 
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    }

    function handleCommentSubmit(e) {
        e.preventDefault();
        const commentId = uuid()
        formData['commentId'] = commentId
        dispatch(inputComment(formData))
        // handleAddComment(commentId)
        setFormData(INITIAL_STATE)
    }

    return (
        <form 
            onSubmit={handleCommentSubmit}
            className='comments-wrapper'>
                <h1>Comments</h1>
                <input 
                    placeholder='add a comment'
                    name='comment'
                    value={formData.comment}
                    onChange={handleChange}
                />
                <button>
                    Comment
                </button>
        </form>
    )
}

export default CommentForm