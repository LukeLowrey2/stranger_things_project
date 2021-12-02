import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {fetchPosts} from '../api/index';
import SinglePostView from './SinglePostView';

const PostView = () => {

    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

    const [posts , setPosts] = useState([]);

    useEffect( async () => {
    const thePosts = await fetchPosts();
    // console.log('this is the post variable', thePosts);
    setPosts(thePosts.data.posts)
    })

    let postElements = null;

    if( posts && posts.length ) {
        postElements = <div class='posts-section'>
            {
                posts.map((post) => /*<div key={posts.id} className='post'>{posts.title}</div>*/
                <SinglePostView key={post._id} post={post} />
                )
                
            }
        </div>
    }

    return (
        <div  >
            {
                postElements
            }
        </div>
    )
};

export default PostView;
