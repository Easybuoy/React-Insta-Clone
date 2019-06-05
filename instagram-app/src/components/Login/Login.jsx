import React, { useState } from 'react'
import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        if (username !== '' && password !== '') {
            localStorage.setItem('token', username);
            window.location.reload();
        }
    }

    return (
        <div className="login">
            <h2>Instagram</h2>
            <div className="login-form">
                <input onChange={handleUsernameChange} type="text" placeholder="Username" />
                <input onChange={handlePasswordChange} type="password" placeholder="Password" />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}