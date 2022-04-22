import './Comment.css'

import React from 'react'

function Comment({deleteFunction, comment}) {
    return (
        <div className='commentWrapper'>
            <button 
                onClick={() => deleteFunction()}
                className='commentDeleteButton'>
                    X
            </button>
            <span>{comment}</span>
        </div>
    )
}

export default Comment