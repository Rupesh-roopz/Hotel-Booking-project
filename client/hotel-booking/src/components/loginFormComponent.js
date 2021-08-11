import homeImg from '../asserts/images/homeImg.jpg'
import React from 'react'
function LoginForm (props) {
    return (
        <div className="login-wrapper">
            <form onSubmit = {props.onSubmit} id ="loginForm" className="login-form row" >
                <div className="row">
                    {!(props.state.error === undefined)
                        ? <div className="errors-class">
                            {props.state.error}
                        </div>
                        : <div/>}
                </div>
                <div className="row">
                    <label
                        htmlFor = "email"
                        className = "form-label login-label">
                        Email
                    </label>
                    <input
                        type = "email"
                        className ="form-control"
                        id = "email"
                        placeholder = "ex: JohnWick@example.com"
                        onChange = {props.onChange}
                        value = {props.state.email}
                        ref = {props.userReference}
                        required
                    />
                </div>
                <div className="row">
                    <label
                        htmlFor = "password"
                        className = "form-label login-label">
                            Password
                    </label>
                    <input
                        type = "password"
                        className = "form-control"
                        id = "password"
                        placeholder = "password"
                        value = {props.state.password}
                        onChange = {props.onChange }
                        ref={props.passwordreference}
                        required
                    />
                </div>
                <div className="row login-buttons">
                    <button
                        type = "submit"
                        className = "btn btn-primary col-4">
                            Log in
                    </button>
                    {/* <button
                        type = "button"
                        onClick = {props.handleSignin}
                        className = "btn btn-primary col-3">
                            Sign in
                    </button> */}
                </div>
                <div className="row">
                    <a className="row signin-link" onClick= {props.handleSignin}>Create account</a>
                </div>
            </form>
            <img src={homeImg} alt="homeImage" className="loginImage-wrapper" />
        </div>
    )
}

export default LoginForm
