import React from 'react'
import ProfileComponent from '../components/ProfileComponent'
import api from '../Resources/index'
import NavigationContainer from './NavigationContainer'
import http from '../constants/http'

class ProfileContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userName : '',
            profile : {}
        }
    }

    componentDidMount () {
        this.setState({
            userName : sessionStorage.getItem('userName')
        })
        api.getUserData()
            .then(res => {
                this.setState({
                    profile : res.data.user
                })
            })
            .catch(e => {
                if (e.response.status === http.Unauthorized) { this.props.history.push('/sessionExpired') }
            })
    }

    render () {
        return (
            <>
                <NavigationContainer/>
                <ProfileComponent state={this.state}/>
            </>
        )
    }
}

export default ProfileContainer
