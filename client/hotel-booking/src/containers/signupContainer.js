import React from 'react'
// import axios from 'axios'
import SignUpForm from '../components/signupFormComponent'
import { withRouter } from 'react-router-dom'
import api from '../Resources/index'

class SignUp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name : 'Rupesh',
            email : 'rupesh@gmail.com',
            newPassword : '1234',
            newPasswordVerify : '1222',
            mobileNumber : '1212',
            age : '12',
            idProofNumber : '1212',
            error : {}
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleOnClick=(event) => {
        event.preventDefault()
        console.log(this.state)
        api.postNewUser(this.state)
            .then(res => {
                console.log(res)
                this.props.history.push('/login')
            })
            .catch((e) => {
                console.log(e.response.data.error)
                this.setState({ error : e.response.data.error })
            })
        /*         axios.post('http://localhost:8800/users/signIn', {
            name : this.state.name,
            email : this.state.email,
            newPassword : this.state.newPassword,
            newPasswordVerify : this.state.newPasswordVerify,
            mobileNumber : this.state.mobileNumber,
            age : this.state.age,
            idProofNumber : this.state.idProofNumber

        })
            .then(res => {
                console.log(res)
                this.props.history.push('/login')
            })
            .catch((e) => {
                console.log(e.response)
                this.setState({ error : e.response.data.error })
            }) */
    }

    handleLogin = () => {
        this.props.history.push('/login')
    }

    render () {
        return <SignUpForm
            state = {this.state}
            handleOnChange = {this.handleOnChange}
            handleOnClick = {this.handleOnClick}
            handleLogin = {this.handleLogin}
        />
    }
}

export default withRouter(SignUp)
