import homeImg from '../asserts/images/homeImg.jpg'
import React from 'react'
function SignUpForm (props) {
    // console.log(!(props.state.error.invalidMobileNumber === undefined))
    // console.log(props.state.error.userExists.errorMessage)
    // console.log(Object.keys(props.state.error).length)
    // let error
    // (Object.keys(props.state.error).length) ? error = true : error = false
    return (
        <div className = "container-flex signIn-wrapper ">
            <form onSubmit={props.handleOnClick} className="signIn-form">

                <div className="col-6">
                    <label
                        className="form-label signIn-label"
                        htmlFor = "fullName">
                            Full Name
                    </label>
                    <input
                        id = "name"
                        type = "text"
                        className = "form-control"
                        value = {props.state.name}
                        onChange = {props.handleOnChange}
                        required
                    />
                </div>
                <div className="col-6">
                    <label className="form-label signIn-label" htmlFor = "email">Email</label>
                    <input
                        id = "email"
                        type = "text"
                        className = "form-control"
                        value = {props.state.email}
                        onChange={props.handleOnChange}
                        required
                    />
                    {!(props.state.error.userExists === undefined)
                        ? <div className="errors-class">
                            {props.state.error.userExists.errorMessage}
                        </div>
                        : <div></div>}
                </div>
                <div className = "row ">
                    <div className="col-6">
                        <label
                            className = "form-label signIn-label"
                            htmlFor = "newPassword"
                        >
                            New Password
                        </label>
                        <input
                            id = "newPassword"
                            type = "password"
                            className = "form-control"
                            value = {props.state.newPassword}
                            onChange={props.handleOnChange}
                            required
                        />
                        {!(props.state.error.passwordLength === undefined)
                            ? <div className="errors-class">
                                {props.state.error.passwordLength.errorMessage}
                            </div>
                            : <div></div>}

                    </div>
                    <div className="col-6">
                        <label
                            className="form-label signIn-label"
                            htmlFor = "newPasswordVerify"
                        >
                        Re-Enter Password
                        </label>
                        <input
                            id = "newPasswordVerify"
                            type = "password"
                            className = "form-control"
                            value = {props.state.newPasswordVerify}
                            onChange={props.handleOnChange}
                            required
                        />
                        {!(props.state.error.passwordError === undefined)
                            ? <div className="errors-class">
                                {props.state.error.passwordError.errorMessage}
                            </div>
                            : <div></div>}
                    </div>

                </div>
                <div className="col-6">
                    <label
                        className="form-label signIn-label"
                        htmlFor = "phoneNumber"
                    >
                        Phone Number
                    </label>
                    <input
                        id = "mobileNumber"
                        type = "text"
                        className = "form-control"
                        value = {props.state.mobileNumber}
                        onChange = {props.handleOnChange}
                        required
                    />
                    {!(props.state.error.invalidMobileNumber === undefined)
                        ? <div className="errors-class">
                            {props.state.error.invalidMobileNumber.errorMessage}
                        </div>
                        : <div></div>}
                </div>
                <div className = "row ">
                    <div className="col-6">
                        <label
                            className="form-label signIn-label"
                            htmlFor = "idProofNumber"
                        >
                        ID Proof Number
                        </label>
                        <input
                            id = "idProofNumber"
                            type = "text"
                            className = "form-control"
                            value = {props.state.idProofNumber}
                            onChange={props.handleOnChange}
                            required
                        />
                    </div>
                    <div className="col-6">
                        <label className="form-label signIn-label" htmlFor = "age">Age</label>
                        <input
                            id = "age"
                            type = "number"
                            className = "form-control"
                            value = {props.state.age}
                            onChange = {props.handleOnChange}
                            required
                        />
                    </div>
                </div>
                <div className="row login-buttons">
                    <button
                        type = "button"
                        onClick = {props.handleOnClick}
                        className = "btn btn-primary col-3">
                            Sign in
                    </button>

                </div>
                <div className="row">
                    <a className="row signin-link" onClick= {props.handleLogin}>Login insted</a>
                </div>
            </form>
            <img src={homeImg} alt="homeImage" className="loginImage-wrapper" />
        </div>
    )
}

export default SignUpForm
