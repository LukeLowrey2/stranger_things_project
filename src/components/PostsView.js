import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {fetchPosts} from '../api/index';

const PostView = () => {

    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

    const [posts , setPosts] = useState([]);

    useEffect( async () => {
    const thePosts = await fetchPosts();
    console.log('this is the post variable', thePosts);
    setPosts(thePosts.data.posts)
    })

    let postElements = null;

    if( posts && posts.length ) {
        postElements = <div>
            {
                posts.map((posts) => <div key={posts.id}>{posts.title}</div>)
            }
        </div>
    }

    return (
        <div class='posts-section' >
            {
                posts.map((posts) => <div key={posts.id} class='post'  >
                    <h3>{posts.title}</h3>
                    <div>{posts.description}</div>
                    <br></br>
                    <div>{posts.price}</div>
                </div>)
            }
        </div>
    )
};

export default PostView;
