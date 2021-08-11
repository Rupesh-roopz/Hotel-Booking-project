import React from 'react'
import HotelsFeedComponent from '../components/hotelsFeedComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'

class HotelsFeedContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hotelsList : [],
            isClicked : false
        }
    }

    componentDidMount () {
        this.getData()
    }

    getData = () => {
        api.getHotelDetails()
            .then((res) => {
                console.log(res.data)
                this.setState({ hotelsList : res.data })
            })
            .catch((e) => {
                console.log(e.response)
                if (e.response.status === 403) { this.props.history.push('/login') }
            })
    }

    hotelPreview=(hotel) => {
        const selectedHotel = {
            hotel : hotel
        }
        api.postHotelData(selectedHotel)
            .then(res => {
                console.log(res.status)
                this.props.history.push('/hotelPreview')
            }
            )
    }

    render () {
        return (

            <div>
                <NavigationContainer/>
                <HotelsFeedComponent
                    state = {this.state}
                    hotelPreview = {this.hotelPreview}
                />
            </div>
        )
    }
}
export default withRouter(HotelsFeedContainer)
