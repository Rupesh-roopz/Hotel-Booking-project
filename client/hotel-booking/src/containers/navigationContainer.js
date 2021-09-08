import React from 'react'
import NavigationComponent from '../components/NavigationComponent'
import { withRouter } from 'react-router-dom'
import api from '../Resources/index'
import http from '../constants/http'

class NavigationContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data : {},
            isAdmin : false
        }
    }

    componentDidMount () {
        this.getUserData()
    }

    getUserData = () => {
        api.getUserData()
            .then((res) => {
                if (res.data.user.isAdmin !== undefined) {
                    this.setState({
                        isAdmin : true
                    })
                }
                this.setState({
                    data : res.data.user
                })
            })
            .catch((e) => {
                if (e.response.status === http.FORBIDDEN) { this.props.history.push('/forbidden') }
                if (e.response.status === http.Unauthorized) { this.props.history.push('/sessionExpired') }
            })
    }

    handleLogout = () => {
        window.localStorage.setItem('CREDENTIALS_FLUSH', Date.now().toString())
        window.localStorage.removeItem('CREDENTIALS_FLUSH')
        api.clearSession()
        document.cookie = 'token=; expires=, 01 Jan 1970 00:00:00 UTC'
        sessionStorage.clear()
        this.props.history.push('/login')
    }

    hangleMyProfile = () => {
        this.props.history.push('/profile')
    }

    handleMyBookings = () => {
        this.props.history.push('/myBookings')
    }

    render () {
        return <NavigationComponent
            logout = {this.handleLogout}
            myProfile = {this.hangleMyProfile}
            bookings = {this.handleMyBookings}
            state = {this.state}
        />
    }
}

export default withRouter(NavigationContainer)
