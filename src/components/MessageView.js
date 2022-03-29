import React, { useEffect, useState } from 'react';
import { fetchMessages } from '../api/index';

const MessageView = () => {

    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

    const [userData, setUserData] = useState({});

    useEffect(async () => {
        const thePosts = await fetchMessages();
        console.log('this is the post data', thePosts);
        setUserData(thePosts.data.messages)
        console.log('this is the user data',userData)
    }, [])

    let message = null;

    if (userData && userData.length) {
        message = <div className='posts-section'>
            {
                userData.map((data) =>
                <div>{data.content}</div>
                )

            }
        </div>
    }

    let messageElements = null;

    if (userData && userData.length) {
        messageElements = <div className='posts-section'>
            {
                userData.map((data) =>
                <div className='messages' key={data._id}>
                <div>From:{data.fromUser.username}</div>
                <div>Post:{data.post.title}</div>
                <div>Message:{data.content}</div>
                </div>
                )

            }

        </div>
    }

    return (
        <div  >
            <div>Messages:</div>
            <div >
            {
                messageElements
            }
            </div>
            
        </div>
    )
};

export default MessageView;