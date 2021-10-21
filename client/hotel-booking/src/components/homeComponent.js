import homeImg from '../asserts/images/homeImg.jpg'
import React from 'react'
import { useHistory } from 'react-router-dom'

function HomeComponent () {
    const history = useHistory()
    return (
        <div data-testid="home-test">
            <div className = "wrapper">
                <span
                    data-testid="welcome-text"
                    className = "welcomeNote"
                >Book your favourite hotel here!
                </span>
                <button
                    data-testid="login-button"
                    className = "btn homeButtons"
                    onClick = {() => history.push('/login')}
                >
                    Log in
                </button>
                <button
                    data-testid="signin-button"
                    className = "btn homeButtons"
                    onClick = {() => history.push('/signup')}
                >
                    Sign Up
                </button>
            </div>
            <img src = {homeImg} alt = "homeImage" className = "homeImage-wrapper" />
        </div>
    )
}

export default HomeComponent
