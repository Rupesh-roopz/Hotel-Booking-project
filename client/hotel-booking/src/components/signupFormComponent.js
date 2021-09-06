import homeImg from '../asserts/images/homeImg.jpg'
import React from 'react'

function SignUpForm (props) {
    return (
        <div className = "container-flex signIn-wrapper ">
            <form onSubmit={props.handleOnSubmit} className="signIn-form">
                <div className="col-6">
                    <label
                        className="form-label signIn-label"
                        htmlFor = "fullName">
                            Full Name*
                    </label>
                    <input
                        id = "name"
                        type = "text"
                        className = "form-control"
                        value = {props.state.name}
                        onChange = {props.handleOnChange}
                        placeholder= "Enter Full Name"
                        required
                    />
                    {(props.state.error.nameTaken !== undefined)
                        ? <div className="errors-class">
                            {props.state.error.nameTaken.errorMessage}
                        </div>
                        : <div></div>}
                </div>
                <div className="col-6">
                    <label className="form-label signIn-label" htmlFor = "email">Email*</label>
                    <input
                        id = "email"
                        type = "text"
                        className = "form-control"
                        value = {props.state.email}
                        onChange={props.handleOnChange}
                        placeholder= "Enter Email"
                        required
                    />
                    {(props.state.clientErrors !== null)
                        ? <div className="errors-class">
                            {props.state.clientErrors.emailError}
                        </div>
                        : <div></div>}
                    {(props.state.error.userExists !== undefined)
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
                            New Password*
                        </label>
                        <input
                            id = "newPassword"
                            type = "password"
                            className = "form-control"
                            value = {props.state.newPassword}
                            onChange={props.handleOnChange}
                            placeholder= "Enter New Password"
                            required
                        />
                        {(props.state.clientErrors !== null)
                            ? <div className="errors-class">
                                {props.state.clientErrors.passwordError}
                            </div>
                            : <div></div>}
                        {(props.state.error.passwordError !== undefined)
                            ? <div className="errors-class">
                                {props.state.error.passwordError.errorMessage}
                            </div>
                            : <div></div>}
                    </div>
                    <div className="col-6">
                        <label
                            className="form-label signIn-label"
                            htmlFor = "newPasswordVerify"
                        >
                        Re-Enter Password*
                        </label>
                        <input
                            id = "newPasswordVerify"
                            type = "password"
                            className = "form-control"
                            value = {props.state.newPasswordVerify}
                            onChange={props.handleOnChange}
                            placeholder= "Re-enter New Password"
                            required
                        />
                        {(props.state.clientErrors !== null)
                            ? <div className="errors-class">
                                {props.state.clientErrors.passwordVerifyError}
                            </div>
                            : <div></div>}
                    </div>
                </div>
                <div className="col-6">
                    <label
                        className="form-label signIn-label"
                        htmlFor = "phoneNumber"
                    >
                        Phone Number*
                    </label>
                    <input
                        id = "mobileNumber"
                        type = "text"
                        className = "form-control"
                        value = {props.state.mobileNumber}
                        onChange = {props.handleOnChange}
                        placeholder= "Enter Phone Number"
                        required
                    />
                    {(props.state.clientErrors !== null)
                        ? <div className="errors-class">
                            {props.state.clientErrors.mobileNumberError}
                        </div>
                        : <div></div>}
                </div>
                <div className = "row ">
                    <div className="col-6">
                        <label
                            className="form-label signIn-label"
                            htmlFor = "idProofNumber"
                        >
                        ID Proof Number*
                        </label>
                        <input
                            id = "idProofNumber"
                            type = "text"
                            className = "form-control"
                            value = {props.state.idProofNumber}
                            onChange={props.handleOnChange}
                            placeholder= "Aadhar Card Number"
                            required
                        />
                        {(props.state.clientErrors !== null)
                            ? <div className="errors-class">
                                {props.state.clientErrors.idProofNumberError}
                            </div>
                            : <div></div>}
                    </div>
                    <div className="col-6">
                        <label className="form-label signIn-label" htmlFor = "age">Age*</label>
                        <input
                            id = "age"
                            type = "number"
                            className = "form-control"
                            value = {props.state.age}
                            onChange = {props.handleOnChange}
                            placeholder= "Enter Age"
                            min = "15"
                            max = "90"
                            required
                        />
                        {(props.state.clientErrors !== null)
                            ? <div className="errors-class">
                                {props.state.clientErrors.ageError}
                            </div>
                            : <div></div>}
                    </div>
                </div>
                <div className="row login-buttons">
                    <button
                        type = "submit "
                        className = "btn btn-primary col-3">
                            Sign in
                    </button>

                </div>
                <div className="row">
                    <a className="row signin-link" onClick= {props.handleLogin}>Login instead</a>
                </div>
            </form>
            <img src={homeImg} alt="homeImage" className="loginImage-wrapper" />
        </div>
    )
}

export default SignUpForm
