import React, { useEffect, useState } from 'react';
import { fetchMessages } from '../api/index';

const MessageView = () => {

    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

    const [userData, setUserData] = useState({});

    useEffect(async () => {
        const thePosts = await fetchMessages();
        console.log('this is the post data', thePosts);
        setUserData(thePosts)
        console.log('this is the user data',userData)
    })

    let messageElements = null;

    if (userData && userData.length) {
        postElements = <div className='posts-section'>
            {
                posts.map((data) =>
                <div>{data.data.messages}</div>
                )

            }
        </div>
    }

    return (
        <div  >
            <div>Messages</div>
            {
                messageElements
            }
        </div>
    )
};

export default MessageView;