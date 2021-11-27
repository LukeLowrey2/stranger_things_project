import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import {fetchPosts} from '../api/index';

const App = () => {

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
        <div classname = 'main-view'>
            {
                posts.map((posts) => <div key={posts.id}>
                    <h3>{posts.title}</h3>
                    <div>{posts.description}</div>
                    <div>{posts.price}</div>
                </div>)
            }
        </div>
    )

};

export default App;