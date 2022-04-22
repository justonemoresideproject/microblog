import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Layout from './Layout'
import NewPost from './Blog/NewPost'
import Blog from './Blog/Blog'
import Blogs from './Blog/Blogs'
import EditPost from './Blog/EditBlog'
import DeletePost from './Blog/DeleteBlog';
import InputBlog from './Blog/InputBlog'
import NotFound from './NotFound';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    element={<Layout />}
                    path='/'>
                    <Route 
                        index element={<Blogs />}
                    />
                    <Route
                        path="input/:type/:blogId"
                        index element={<InputBlog />}
                    />
                    <Route 
                        path='new' 
                        element={<NewPost />}
                    />
                    <Route 
                        path='blog/:blogId' 
                        element={<Blog />}
                    />
                    <Route
                        path='edit/:blogId'
                        element={<EditPost />}
                    />
                    <Route
                        path='delete/:blogId'
                        element={<DeletePost />}
                    />
                    <Route
                        path='*'
                        element={<NotFound />}
                    />
                </Route>
                <Route
                    path='*'
                    element={<NotFound />}
                />
                <Route
                    path='/notfound'
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes