import React from 'react'
import HomeComponent from '../components/homeComponent'

class Home extends React.Component {
    handleLogin = () => {
        this.props.history.push('/login')
    }

    handleSignin = () => {
        this.props.history.push('/signup')
    }

    render () {
        return <HomeComponent
            handleLogin = {this.handleLogin}
            handleSignin = {this.handleSignin}/>
    }
}

export default Home
