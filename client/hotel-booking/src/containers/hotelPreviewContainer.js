import React from 'react'
import HotelPreviewComponent from '../components/hotelPreviewComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'

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

    getSelectedHotelDetails = () => {
        api.getHotelData()
            .then((res) => {
                console.log('hotel', res.data)
                this.setState({ hotelData : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
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
