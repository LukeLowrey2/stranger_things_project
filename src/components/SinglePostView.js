import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {fetchPosts} from '../api/index';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';  

const SinglePostView = (props) => {
    const { post } = props; 

    const deletePost = async () => {
        try {

            const response = await fetch(`${BASE_URL}/posts/${post._id}`, {
                method: "DELETE", 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })

            const data = await response.json(); 

            console.log('This is the deletePost function', data); 

        } catch (err) {
            console.log(err); 
        }
    }

    return (
        <div className='post'>
            <div >
                <h3>{post.title}</h3>
                <div>{post.description}</div>
                <br></br>
                <div>{post.price}</div>
                <br></br>
                <button className='delete-button' onClick={deletePost}>Delete Post</button>
            </div>
        </div>
    )

}

export default SinglePostView; 