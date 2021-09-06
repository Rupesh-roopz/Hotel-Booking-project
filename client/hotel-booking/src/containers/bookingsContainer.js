import React from 'react'
import BookingComponent from '../components/BookingComponent'
import NavigationContainer from './NavigationContainer'
import api from '../Resources/index'
import http from '../constants/http'

class BookingContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            bookings : {}
        }
    }

    componentDidMount () {
        api.getBookedHotelData()
            .then(res => {
                this.setState({
                    bookings : res.data
                })
            })
            .catch((e) => {
                if (e.response.status === http.Unauthorized) { this.props.history.push('/sessionExpired') }
            })
    }

    render () {
        return (
            <>
                <NavigationContainer/>
                <BookingComponent booking={this.state.bookings}/>
            </>
        )
    }
}

export default BookingContainer
