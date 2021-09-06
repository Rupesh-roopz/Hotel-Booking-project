import React from 'react'
import HotelPreviewComponent from '../components/HotelPreviewComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './NavigationContainer'
import api from '../Resources/index'
import http from '../constants/http'

class HotelPreviewContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hotelData : {}
        }
    }

    componentDidMount () {
        this.getSelectedHotelDetails()
    }

    getSelectedHotelDetails = async () => {
        await api.getHotelData()
            .then((res) => {
                this.setState({ hotelData : res.data })
            })
            .catch(e => {
                if (e.response.status === http.Unauthorized) { this.props.history.push('/sessionExpired') }
            })
    }

    onBooked = () => {
        this.props.history.push('/BookHotel')
    }

    render () {
        return (
            <div>
                <NavigationContainer/>
                <HotelPreviewComponent
                    hotel={this.state.hotelData}
                    showHome = {this.showHome}
                    onBooked = {this.onBooked}
                />
            </div>
        )
    }
}

export default withRouter(HotelPreviewContainer)
