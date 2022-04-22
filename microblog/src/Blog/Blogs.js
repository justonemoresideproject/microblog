import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBlogsFromApi } from '../reducers/actions'

function Blogs(){
    const dispatch = useDispatch()
    const blogs = useSelector((store) => store.titles)
    const keys = Object.keys(blogs)

    console.log(blogs)

    useEffect(() => {
        dispatch(getBlogsFromApi())
    }, [dispatch])

    if(keys.length < 1){
        return(
            <h1>No blogs to show...</h1>
        )
    }

    return(
        <>
            {keys.map(key => {
                return (
                    <div key={`blogWrapper-${key}`}>
                        <h1>
                            {blogs[key].title}
                        </h1>
                        <h4>
                            {blogs[key].description}
                        </h4>
                        <Link to={`blog/${key}`}>
                            Read the full blog...
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default Blogs