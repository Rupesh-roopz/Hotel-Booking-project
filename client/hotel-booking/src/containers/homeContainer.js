import React from 'react'
import HomeComponent from '../components/HomeComponent'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    handleLogin = () => {
        this.props.history.push('/login')
    }

    handleSignin = () => {
        this.props.history.push('/signup')
    }

    render () {
        if (document.cookie) {
            return <Redirect to="/main" />
        } else {
            return <HomeComponent
                handleLogin = {this.handleLogin}
                handleSignin = {this.handleSignin}/>
        }
    }
}

export default Home
