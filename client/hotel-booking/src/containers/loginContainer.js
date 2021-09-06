import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import LoginForm from '../components/LoginFormComponent'
import api from '../Resources/index'
import { loginValidation } from '../validations/LoginValidation'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.inputRef = React.createRef()
        this.passwordRef = React.createRef()
        this.state = {
            email : 'rupesh.admin@gmail.com',
            password : 'rupeshadmin',
            serverError : '',
            clientError : ''
        }
    }

    componentDidMount () {
        if (this.props.history.action === 'POP' && sessionStorage.getItem('token')) {
            this.props.history.push('/main')
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
                    const token = res.data.accessToken
                    sessionStorage.setItem('token', token)
                    sessionStorage.setItem('userName', res.data.userName)
                    sessionStorage.setItem('userId', res.data.userid)
                    sessionStorage.setItem('isAdmin', res.data.isAdmin)
                    this.props.history.push('/main')
                })
                .catch(e => {
                    this.setState({
                        serverError : e.response.data.err
                    })
                    this.inputRef.current.style.border = '2px solid Red'
                    this.passwordRef.current.style.border = '2px solid Red'
                })
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.loginValidation()
    }

    handleSignin = () => {
        console.log(document.cookie)
        this.props.history.push('/signup')
    }

    render () {
        toast.configure()
        if (document.cookie) {
            return <Redirect to="/main" />
        } else {
            return <LoginForm
                onChange = {this.handleOnChange}
                onSubmit = {this.handleOnSubmit}
                state = {this.state}
                userReference = {this.inputRef}
                passwordreference = {this.passwordRef}
                handleSignin = {this.handleSignin}
            />
        }
    }
}

export default withRouter(Login)
