import './NewPost.css'

import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { inputBlog } from '../reducers/actions'

function NewPost() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const INITAL_STATE = {
        title: '',
        description: '',
        body: '',
        id: ''
    }

    const [formData, setFormData] = useState(INITAL_STATE)

    function handleSubmit(e) {
        e.preventDefault();
        const id = uuid()
        formData['id'] = id
        dispatch(inputBlog(formData))
        setFormData(INITAL_STATE);
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
        // <div className='newpost-wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>New Post</h1>

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

export default NewPost