/* eslint-disable no-useless-escape */
import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../components/loginFormComponent'
import api from '../Resources/index'
import { loginValidation } from '../utils/loginUtils'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.inputRef = React.createRef()
        this.passwordRef = React.createRef()
        this.state = {
            email : 'rupesh123@gmail.com',
            password : '123456',
            serverError : '',
            clientError : ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value,
            serverError : '',
            clientError : ''
        })
        this.inputRef.current.style.border = 'none'
        this.passwordRef.current.style.border = 'none'
    }

    loginValidation = () => {
        this.setState({
            clientError : loginValidation(this.state)
        })
        if (Object.keys(loginValidation(this.state)).includes('emailError')) {
            this.inputRef.current.style.border = '2px solid Red'
            toast.warn('Enter Valid Email ID')
        }
        if (Object.keys(loginValidation(this.state)).includes('passwordError')) {
            this.passwordRef.current.style.border = '2px solid Red'
            toast.warn('Password should not be blank')
        }
        if (Object.keys(loginValidation(this.state)).length === 0) {
            api.postUserData(this.state)
                .then(res => {
                    sessionStorage.setItem('token', res.data.accessToken)
                    sessionStorage.setItem('userName', res.data.userName)
                    sessionStorage.setItem('userId', res.data.userid)
                    console.log(res.data)
                    res.data.isAdmin
                        ? this.props.history.push('/hotelsList')
                        : this.props.history.push('/main')
                })
                .catch(e => {
                    this.setState({
                        serverError : e.response.data.err
                    })
                    this.inputRef.current.style.border = '2px solid Red'
                    this.passwordRef.current.style.border = '2px solid Red'
                })
        }
        this.dismissError()
    }

    dismissError = async () => {
        await setTimeout(() => {
            this.setState({
                serverError : '',
                clientError : ''
            })
        }, 5000)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.loginValidation()
    }

    handleSignin = () => {
        this.props.history.push('/signup')
    }

    render () {
        toast.configure()
        return (
            <LoginForm
                onChange = {this.handleOnChange}
                onSubmit = {this.handleOnSubmit}
                state = {this.state}
                userReference = {this.inputRef}
                passwordreference = {this.passwordRef}
                handleSignin = {this.handleSignin}
            />
        )
    }
}

export default withRouter(Login)
