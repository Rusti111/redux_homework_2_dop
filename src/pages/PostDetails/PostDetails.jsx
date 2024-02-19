import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostDetails = () => {
    const [post, setPost] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/` + id).then((res) => {
            return res.json()
        }).then((data) => {
            setPost(data)
        })
    }, [])
    return (
        <div>
            {
                post.id ?
                    <div className='details'>
                        <Link to={'/'}><button className='
                        but' >Back.</button></Link>
                        <h1>{post.id}</h1>
                        <h1>{post.title}</h1>
                        <h1>{post.body}</h1>
                    </div>
                    : <></>
            }
        </div>
    );
}

export default PostDetails;