import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../components/loginFormComponent'
import api from '../Resources/index'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.inputRef = React.createRef()
        this.passwordRef = React.createRef()
        this.state = {
            email : 'rupesh@gmail.com',
            password : 'rupesh',
            error : ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        api.postUserData(this.state)
            .then(res => {
                console.log(res.data.accessToken)
                sessionStorage.setItem('login', res.data.accessToken)
                this.props.history.push('/main')
            })
            .catch(e => {
                if (e.response !== null) {
                    this.setState({
                        error : e.response.data.err
                    })
                }

                this.inputRef.current.style.border = '2px solid Red'
                this.passwordRef.current.style.border = '2px solid Red'
            })
    }

    handleSignin = () => {
        this.props.history.push('/signup')
    }

    render () {
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
