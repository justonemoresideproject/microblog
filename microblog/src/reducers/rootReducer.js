const INITIAL_STATE = { 
    blogs : {}, 
    titles : {} 
}

function deleteObjProp(obj, id){
    let newObj = {}
    let objKeys = Object.keys(obj)

    objKeys.forEach(ele => {
        if(ele != id){
            newObj[ele] = obj[ele]
        }
    })

    return newObj
}

function rootReducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case "LOAD_BLOGS":
            const loadedState = {
                ...state
            }

            action.data.forEach(post => {
                loadedState.titles[post.id] = {
                    title: post.title,
                    description: post.description,
                    votes: post.votes
                }
            })
            return { ...loadedState }

        case "INPUT_BLOG":
            return {...state, blogs : {
                [action.data.id] : { 
                title: action.data.title,
                description: action.data.description,
                body: action.data.body,
                votes: action.data.votes,
                comments: action.data.comments
            }}}
        
        case "DELETE_BLOG":
            const newBlogs = deleteObjProp(state.blogs, action.id)
            return { ...newBlogs }

        case "INPUT_COMMENT":
            const commentId = action.data.commentId
            const blogId = action.data.blogId
            const newComment = action.data.comment
            // const stateCopy = { ...state, blogs : {
            //     ...state.blogs, [blogId] : {
            //         comments : { 
            //             [commentId] : newComment
            //         }
            //     }
            // } }
            return { ...state, blogs : {
                ...state.blogs, [blogId] : {
                    ...state.blogs[blogId],
                    comments : [
                        ...state[blogId].comments,
                        {
                            id: commentId,
                            text: newComment
                        }
                    ]
                }
            } }

        case "DELETE_COMMENT":
            const newComments = deleteObjProp(state.blogs[action.blogId].comments, action.commentId)
            const newState = state
            newState[action.blogId].comments = newComments
            return { ...newState }
            
        default: return state
    }
}

export default rootReducer

// state = {blogId: {title : 'example', description: 'example', body: 'example', comments: {commentId: 'comment here'}}}