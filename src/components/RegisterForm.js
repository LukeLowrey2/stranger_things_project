import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT/users/register';

const RegisterForm= () => {

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
        <div className='login-form'>
            <form onSubmit= {handleSubmit}>
                <h2>New User</h2>
                
                <input type='text' placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)}>    
                </input>
                <br></br>
                <br></br>
                <input type='text' placeholder='Password'value={password} onChange={(event) => setPassword(event.target.value)}>
                </input>
                <br></br>
                <br></br>
                <button type='submit'>
                    Sign Up
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

export default RegisterForm;