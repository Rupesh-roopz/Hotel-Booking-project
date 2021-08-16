import React from 'react'
import ProfileComponent from '../components/profileComponent'
import api from '../Resources/index'
import NavigationContainer from './navigationContainer'
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
                console.log(res.data)
                this.setState({
                    profile : res.data.user
                })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
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
