import React from 'react'
import Admin from '../components/AdminComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './NavigationContainer'
import { hotelValidation } from '../validations/AdminValidation'
import api from '../Resources/index'
import http from '../constants/http'

class AdminPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hotelName : '',
            totalRooms : '',
            roomsAvailable : '',
            address : '',
            phone : '',
            Single : '',
            Double : '',
            Suit : '',
            description : '',
            error : {},
            serverError : {},
            isSucessfull : false
        }
    }

    showHotelsList = () => {
        this.props.history.push('/hotelsList')
    }

    showHome = () => {
        this.props.history.push('/main')
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value,
            isSucessfull : false,
            error : {},
            serverError : {}
        })
    }

    hotelValidation = () => {
        this.setState({ error : hotelValidation(this.state) })
        if (Object.keys(hotelValidation(this.state)).length === 0) {
            api.postHotelDetails(this.state)
                .then(res => {
                    this.setState({ isSucessfull : true })
                    this.props.history.push('/hotelsList')
                })
                .catch((e) => {
                    this.setState({ serverError : e.response.data.error })
                    if (e.response.status === http.Forbidden) { this.props.history.push('/forbidden') }
                    if (e.response.status === http.Unauthorized) { this.props.history.push('/sessionExpired') }
                })
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.hotelValidation()
    }

    render () {
        return (
            <div>
                <NavigationContainer/>
                <Admin
                    state = {this.state}
                    onChange = {this.handleOnChange}
                    onSubmit = {this.handleOnSubmit}
                    showHotelsList = {this.showHotelsList}
                    showHome = {this.showHome}
                />
            </div>
        )
    }
}

export default withRouter(AdminPage)
