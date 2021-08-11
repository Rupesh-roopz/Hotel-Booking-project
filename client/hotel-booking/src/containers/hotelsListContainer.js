import React from 'react'
import HotelList from '../components/hotelListComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'

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
                console.log(res.data)
                this.setState({ hotelsList : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/') }
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
