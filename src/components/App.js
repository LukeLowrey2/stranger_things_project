import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchPosts } from '../api/index';
import PostView from './PostsView';
import RegisterForm from './RegisterForm';
import NewPostForm from './NewPostForm';
import LoginForm from './LoginForm';
import Logout from './Logout';
import MessageView from './MessageView';

const App = () => {

    return (
        <div>

            <div className='header'>

                <div>
                    <div className='page-name'>Stranger's Things</div>
                </div>

                <div className='navigation-bar'>
                    <div>
                    <button><Link to="/" className='nav-buttons'>Home</Link></button>
                    </div>
                    <br></br>
                    <div>
                    <button><Link to="/LoginForm" className='nav-buttons'>Log In</Link></button>
                    </div>
                    <br></br>
                    <div>
                    <button><Link to="/RegisterForm" className='nav-buttons'>Sign Up</Link></button>
                    </div>
                    <br></br>
                    <div>
                    <button><Link to="/NewPostForm" className='nav-buttons'>New Post</Link></button>
                    </div>
                    <br></br>
                    <div>
                    <button><Link to="/MessageView" className='nav-buttons'>Messages</Link></button>
                    </div>
                    
                </div>
            </div>

            <Switch>
                <Route path="/RegisterForm" component={RegisterForm} />

                <Route path="/NewPostForm" component={NewPostForm} />

                <Route path="/LoginForm" component={LoginForm} />

                <Route path="/MessageView" component={MessageView} />
            </Switch>


            <div className='main' >
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