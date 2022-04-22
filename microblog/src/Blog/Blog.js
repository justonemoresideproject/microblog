import './Blog.css';

import { React, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { inputComment, deleteComment, getBlogFromApi } from '../reducers/actions'
import Comments from './Comments'

function Blog() {
    const navigate = useNavigate()
    const { blogId } = useParams()
    const blog = useSelector((store) => store.blogs[blogId])
    console.log(blog)
    const comments = blog.comments
    const dispatch = useDispatch()

    console.log(blog)

    useEffect(() => {
        dispatch(getBlogFromApi(blogId))
    }, [dispatch])

    if(blog == undefined){
        return (
            <h1>Hmmmm... nothing here</h1>
        )
    }

    // const INITIAL_STATE = { 
    //     blogId: blogId, 
    //     commentId: '', 
    //     comment: '' 
    // }

    // const [formData, setFormData] = useState(INITIAL_STATE)

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     setFormData(f => ({ ...f, [name]: value }));
    // }

    // function handleCommentSubmit(e) {
    //     e.preventDefault();
    //     const commentId = uuid()
    //     formData['commentId'] = commentId
    //     dispatch(inputComment(formData))
    //     setFormData(INITIAL_STATE)
    // }

    // function handleDeleteComment(commentId) {
    //     dispatch(deleteComment(blogId, commentId))
    // }

    return (
        <>
            <div className='component-wrapper'>
                <div className='Blog-wrapper'>
                    <h2>{blog.title}</h2>
                    <sub>{blog.description}</sub>
                    <p>{blog.body}</p>
                </div>
                <div>
                    <Link className='link' to={`/input/edit/${blogId}`}>
                        Edit
                    </Link>
                    <Link className='link' to={`/delete/${blogId}`}>
                        Delete
                    </Link>
                </div>
                <Comments blogId={blogId} key={`${blogId}-comments`} comments={comments}/>
            </div>
        </>
    )
}

export default Blog