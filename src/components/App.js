import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import {fetchPosts} from '../api/index';
import PostView from './PostsView';
import LogInForm from './LogInForm';
import NewPostForm from './NewPostForm';

const App = () => {

    return (
    
    // <div /*class='nav-bar'*/> 
    //     <div>
    //         <button><Link to="/">Home</Link></button>

    //         <button><Link to="/login">Log In</Link></button>

    //         <button><Link to="/newpost">New Post</Link></button>
                /*only if there a local source token */
    //     </div>
    // </div>

    // <Switch>
    //     <Route exact path = "/" component = {App}/>

    //     <Route path = "/login" component = {LogInForm}/>

    //     <Route path = "/newpost" component = {NewPost}/>
    // </Switch>



    <div>
        <PostView />
    </div>
    )

};





export default App;