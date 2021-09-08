import React from 'react'
import SignUpForm from '../components/SignupFormComponent'
import { withRouter, Redirect } from 'react-router-dom'
import { signUpValidation } from '../validations/SigninValidation'
import api from '../Resources/index'
import 'react-toastify/dist/ReactToastify.css'

class SignUp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name : '',
            email : '',
            newPassword : '',
            newPasswordVerify : '',
            mobileNumber : '',
            age : '',
            idProofNumber : '',
            error : {},
            clientErrors : {}
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value,
            error : {},
            clientErrors : {}
        })
    }

    validation = () => {
        this.setState({
            clientErrors : signUpValidation(this.state)
        })
        if (Object.keys(signUpValidation(this.state)).length === 0) {
            api.postNewUser(this.state)
                .then(res => {
                    this.props.history.push('/login')
                })
                .catch((e) => {
                    console.log(e.response)
                    this.setState({ error : e.response.data.error })
                })
        }
    }

    handleOnSubmit=(event) => {
        event.preventDefault()
        this.validation()
    }

    handleLogin = () => {
        this.props.history.push('/login')
    }

    render () {
        const value = ('; ' + document.cookie).split('; token=').pop().split(';')[0]
        if (value) {
            return <Redirect to="/main" />
        } else {
            return <SignUpForm
                state = {this.state}
                handleOnChange = {this.handleOnChange}
                handleOnSubmit = {this.handleOnSubmit}
                handleLogin = {this.handleLogin}
            />
        }
    }
}

export default withRouter(SignUp)
