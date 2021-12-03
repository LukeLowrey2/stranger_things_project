import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const locallySourcedToken = localStorage.getItem('token');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                    }
                })
            })

            if (response) {
                const { data: { token } } = await response.json();
                localStorage.setItem("token", token)
                setUsername('');
                setPassword('');
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>

                <input type='text' placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input type='text' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}>
                </input>
                <br></br>
                <br></br>
                <button type='submit'>
                    Log In
                </button>

                <div>
                    {
                        locallySourcedToken && locallySourcedToken.length ? <div> Logged In </div> : ''
                    }
                </div>
            </form>
        </div>


    )

}

export default LoginForm;