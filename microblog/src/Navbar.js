import './Navbar.css'

import React from 'react'

import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <div className='nav-wrapper'>
            <div className='second-wrapper'>
            <ul>
                <li>
                    <h1>Microblog</h1>
                    <h4>Get in the rythm of blogging</h4>
                </li>
                <li>
                    <div className='linkDiv'>
                        <Link to='/'>
                            Blogs
                        </Link>
                        <Link to='/input/Add/0'>
                            Add a new post
                        </Link>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;