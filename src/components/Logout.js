import React, { useState, useEffect } from 'react';

const Logout = () => {

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
        

    //     const {data : {token}} = await response.json();

    //     localStorage.setItem('token', token);

    //     setUsername('');
    //     setPassword('');
    

    return (
        <div>
            <button onClick={() => {localStorage.removeItem("token"); }}>
                Logout
            </button>
        </div>
    )

}

export default Logout;