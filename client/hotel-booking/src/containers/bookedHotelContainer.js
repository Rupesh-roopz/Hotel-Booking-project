import React from 'react'
import BookedHotelComponent from '../components/bookedHotelComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'

class BookedHotelContainer extends React.Component {
    constructor (props) {
        super(props)
        const date = new Date()
        this.state = {
            dateOfBooking : date.toDateString(),
            checkInDate : '',
            checkOutDate : '',
            roomType : '',
            hotelData : {},
            userData : {}
        }
    }

    componentDidMount () {
        this.getSelectedHotelDetails()
        this.getuserDetails()
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    getSelectedHotelDetails = () => {
        api.getHotelData()
            .then((res) => {
                console.log(res.data)
                this.setState({ hotelData : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/') }
            })
    }

    getuserDetails =() => {
        api.getUserData()
            .then((res) => {
                console.log(res.data)
                this.setState({ userData : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/') }
            })
    }

    onConfirmBooking = (event) => {
        event.preventDefault()
    }

    render () {
        return (
            <div>
                <NavigationContainer/>
                <BookedHotelComponent
                    state = {this.state}
                    onConfirmBooking = {this.onConfirmBooking}
                    onChange = {this.handleOnChange}
                />
            </div>
        )
    }
}

export default withRouter(BookedHotelContainer)
