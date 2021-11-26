import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT/users/register';

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                }
            })
        });

        const {data : {token}} = await response.json();

        localStorage.setItem('token', token);

        setUsername('');
        setPassword('');
    }

    const locallySourcedToken = localStorage.getItem('token');

    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <input type='text' value={username} onChange={(event) => setUsername(event.target.value)}>
                </input>

                <input type='text' value={password} onChange={(event) => setPassword(event.target.value)}>
                </input>

                <button type='submit'>
                </button>
            </form>

            <div>
                {
                    locallySourcedToken && locallySourcedToken.length ? <div> Logged In </div> : ''
                }
            </div>
        </div>
    )

    

}

export default LoginForm;