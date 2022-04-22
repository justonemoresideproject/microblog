import { React, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { inputBlog } from '../reducers/actions'

function EditPost() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { blogId } = useParams()
    const blog = useSelector((store) => store[blogId])

    const INITIAL_STATE = {
        id: blogId,
        title: blog.title,
        description: blog.description,
        body: blog.body
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    function handleSubmit(e) {
        e.preventDefault();
        
        dispatch(inputBlog(formData))
        setFormData(INITIAL_STATE);
        navigate('/')
    }

    function handleCancel(e) {
        e.preventDefault();
        navigate('/');
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Blog</h1>

            <ul>
                <li>
                    <label htmlFor='title'>
                        Title:
                    </label>
                    <br />
                    <input
                        className='titleInput'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor='description'>
                        Description:
                    </label>
                    <br />
                    <input 
                        className='descriptionInput'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor='body'>
                        Body:
                    </label>
                    <br/>
                    <input 
                        className='bodyInput'
                        name='body'
                        value={formData.body}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <button 
                        className='submitButton'
                    >
                        Submit
                    </button>
                    <button 
                        className='cancelButton'
                        onClick={() => handleCancel}
                    >
                        Cancel
                    </button>
                </li>
            </ul>
        </form>
    )
}

export default EditPost