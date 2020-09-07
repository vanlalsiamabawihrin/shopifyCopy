import React from 'react'
import "./index.css"
import {loginUrl} from './spotify'

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <img src="../images/Spotify.png" alt="Spotify Logo"/>
                <h1>Spotify</h1>          
            </div>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>       
        </div>
    )
}

export default Login
