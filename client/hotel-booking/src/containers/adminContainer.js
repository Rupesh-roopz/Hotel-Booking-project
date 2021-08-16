import React from 'react'
import Admin from '../components/adminComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import { hotelValidation } from '../utils/adminUtils'
import api from '../Resources/index'

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

    showHotelsList=() => {
        this.props.history.push('/hotelsList')
    }

    showHome =() => {
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
                    if (e.response.status === 403) { this.props.history.push('/forbidden') }
                })
        }
        this.dismissError()
    }

    dismissError = async () => {
        await setTimeout(() => {
            this.setState({
                isSucessfull : false,
                error : {},
                serverError : {}
            })
        }, 5000)
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
                    showHome = {this.showHome}/>
            </div>

        )
    }
}

export default withRouter(AdminPage)
