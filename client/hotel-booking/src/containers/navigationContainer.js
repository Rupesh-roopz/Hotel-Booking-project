import React from 'react'
import NavigationComponent from '../components/navigationComponent'
// import axios from 'axios'
import { withRouter } from 'react-router-dom'
import api from '../Resources/index'

class NavigationContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userName : '',
            data : {},
            isAdmin : false
        }
    }

    componentDidMount () {
        this.getUserData()
        this.setState({
            userName : sessionStorage.getItem('userName')
        })
    }

    getUserData = () => {
        api.getUserData()
            .then((res) => {
                console.log(res.data.user)
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
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
            })
    }

    handleLogout = () => {
        sessionStorage.clear()
        this.props.history.push('/')
    }

    hangleMyProfile = () => {
        this.props.history.push('/profile')
    }

    handleMyBookings = () => {
        this.props.history.push('/myBookings')
    }

    render () {
        return <NavigationComponent
            userData = {this.state}
            logout = {this.handleLogout}
            myProfile = {this.hangleMyProfile}
            bookings = {this.handleMyBookings}
            state = {this.state}
        />
    }
}
export default withRouter(NavigationContainer)
