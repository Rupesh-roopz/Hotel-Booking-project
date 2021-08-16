import React from 'react'
import BookingComponent from '../components/bookingComponent'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'

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
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
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
