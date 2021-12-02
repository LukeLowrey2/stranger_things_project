import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchPosts } from '../api/index';
import PostView from './PostsView';
import RegisterForm from './RegisterForm';
import NewPostForm from './NewPostForm';
import LoginForm from './LoginForm';
import Logout from './Logout';

const App = () => {

    return (
        <div>

          <div class='header'>

                <div>
                    <div class='page-name'>Stranger's Things</div>
                </div>

                    <div class='navigation-bar'>
                    <button><Link to="/" class='nav-buttons'>Home</Link></button>
                    
                    <button><Link to="/LoginForm" class='nav-buttons'>Log In</Link></button>

                    <button><Link to="/RegisterForm" class='nav-buttons'>Sign Up</Link></button>

                    <button><Link to="/NewPostForm" class='nav-buttons'>New Post</Link></button>
                            {/* only if there a local source token  */}
                    
                    
                    </div>
          </div>

            <Switch>
                {/* <Route exact path="/" component={App} /> */}

                <Route path="/RegisterForm" component={RegisterForm} />

                <Route path="/NewPostForm" component={NewPostForm} />

                <Route path="/LoginForm" component={LoginForm} />
            </Switch>
            

            <div class='main' >
                <PostView />
                
            </div>

            <br></br>

            <div >
                <Logout />
            </div>
        </div>

    )

};





export default App;