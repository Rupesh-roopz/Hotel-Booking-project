import homeImg from '../asserts/images/homeImg.jpg'
import React from 'react'

function HomeComponent (props) {
    return (
        <div>
            <div className = "wrapper">
                <span className = "welcomeNote">Book your favourite hotel here!</span>
                <button className = "btn homeButtons" onClick = {props.handleLogin}>Log in</button>
                <button className = "btn homeButtons" onClick = {props.handleSignin}>Sign Up</button>
            </div>
            <img src = {homeImg} alt = "homeImage" className = "homeImage-wrapper" />
        </div>
    )
}

export default HomeComponent
