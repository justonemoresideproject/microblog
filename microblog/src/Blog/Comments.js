import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { deleteComment } from '../reducers/actions'
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Comments({blogId}){
    const dispatch = useDispatch()
    const blogComments = useSelector((store) => store.blogs[blogId].comments)

    // const commentKeys = Object.keys(blogComments)
    // const [comments, setComments] = useState(commentKeys)

    // commentKeys.forEach(ele => {
    //     comments.push(blogComments[ele])
    // })

    // console.log(blogComments)
    // console.log(commentKeys)

    function handleDeleteComment(commentId) {
        dispatch(deleteComment(blogId, commentId))
    }

    function handleAddComment(commentId, ){
        // comments.push(commentId)
        console.log('handleAddComment')
    }

    return(
        <>
            <CommentForm 
                blogId={blogId} 
                handleAddComment={handleAddComment} 
            />
            <CommentList 
                blogId={blogId}
                blogComments={blogComments}
                handleDeleteComment={handleDeleteComment}
            />
        </>
    )
}

export default Comments

/* <ul>
                    {commentKeys.map(key => {
                        return (
                            <li key={`${key}-li`}>
                                <Comment 
                                    deleteFunction={handleDeleteComment(key)}
                                    key={key}
                                    comment={blogComments[key]}
                                />
                                {/* <div>
                                    <button 
                                        onClick={() => handleDeleteComment(key)}>
                                        X
                                    </button>
                                    {blog.comments[key]}
                                </div> */
                            // </li>
                //         )
                //     })}       
                // </ul> */}