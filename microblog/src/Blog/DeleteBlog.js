import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../reducers/actions'

function DeletePost() {
    const dispatch = useDispatch()
    const { blogId } = useParams()
    const navigate = useNavigate()

    function handleDelete(){
        dispatch(deleteBlog(blogId))
        navigate('/')
    }

    return(
        <>
            <h1>
                Are you sure you would like to delete this blog?
            </h1>
            <h4>
                ...it will be permanent
            </h4>
            <button onClick={() => handleDelete()}>Delete</button>
            <button onClick={() => navigate(`/${blogId}`)}>Cancel</button>
        </>
    )
}

export default DeletePost