import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchPosts } from '../api/index';
import PostView from './PostsView';
import LogInForm from './LogInForm';
import NewPostForm from './NewPostForm';

const App = () => {

    return (
        <div>

          <div class='header'>

                <div>
                    <div class='page-name'>Stranger's Things</div>
                </div>

                    <div class='navigation-bar'>
                    <button><Link to="/" class='nav-buttons'>Home</Link></button>

                    <button><Link to="/LogInForm" class='nav-buttons'>Log In</Link></button>

                    <button><Link to="/NewPostForm" class='nav-buttons'>New Post</Link></button>
                            {/* only if there a local source token  */}
                    </div>
          </div>

            {/* <Switch>
                <Route exact path="/" component={App} />

                <Route path="/LogInForm" component={LogInForm} />

                <Route path="/NewPostForm" component={NewPostForm} />
            </Switch> */}
            

            <div class='main' >
                <PostView />
            </div>
        </div>

    )

};





export default App;