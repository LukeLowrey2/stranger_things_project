import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { fetchPosts } from '../api/index';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

const SinglePostView = (props) => {
    const { post } = props;
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState('');

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
    
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
    
            const locallySourcedToken = localStorage.getItem("token"); 
    
            const response = await fetch(`${BASE_URL}/posts/${post._id}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${locallySourcedToken}`
                }, 
                body: JSON.stringify({
                    message: {
                        content: "Do you still have this?  Would you take $10 less?"
                      }
                })
            });
    
            const data = await response.json(); 
    
            console.log('This is message data', data);

            setMessage('');
            toggleMessage(false); 
            fetchPosts(); 
        } catch(err) {
            console.log(err)
        }

    }


    const toggleMessage = () => {

        if (!toggle) {
            setToggle(true);
        } 
        else{
            setToggle(false);
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
                <br></br>
                <button className='message-button' onClick={toggleMessage}>Message Stranger</button>
            </div>

            <div>
                    { toggle ? 
                        <form onSubmit={handleSubmit}>
                            <textarea type="text" placeholder="Message"  id="title-input" onChange={(event) => setMessage(event.target.value)}></textarea>
                            <br></br>
                            <button className='message-button' type="submit">Send Message</button>
                        </form>
                        : 
                        ''
                    }
                </div>
        </div>
    )

}

export default SinglePostView;