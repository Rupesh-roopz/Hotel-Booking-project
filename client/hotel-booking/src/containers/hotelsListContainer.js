import React from 'react'
import HotelList from '../components/HotelListComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './NavigationContainer'
import api from '../Resources/index'
import http from '../constants/http'

class HotelsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hotelsList : []
        }
    }

    componentDidMount () {
        this.getData()
    }

    getData = () => {
        api.getHotelDetails()
            .then((res) => {
                this.setState({ hotelsList : res.data })
            })
            .catch((e) => {
                if (e.response.status === http.FORBIDDEN) { this.props.history.push('/forbidden') }
                if (e.response.status === http.UNAUTHORIZED) { this.props.history.push('/sessionExpired') }
            })
    }

    handleOnClick = () => {
        this.props.history.push('/admin')
    }

    showHome = () => {
        this.props.history.push('/main')
    }

    render () {
        return (
            <div>
                <NavigationContainer/>
                <HotelList
                    state = {this.state}
                    onClick = {this.handleOnClick}
                    showHome = {this.showHome}
                />
            </div>)
    }
}

export default withRouter(HotelsList)
