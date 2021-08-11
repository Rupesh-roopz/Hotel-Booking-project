import React from 'react'
import Admin from '../components/adminComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
// import hotel from '../Resources/adminResources'
// import axios from 'axios'
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
            longitude : '',
            lattitude : '',
            singleRoom : '',
            doubleRoom : '',
            suitRoom : '',
            description : ''
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
            [event.target.id] : event.target.value
        })
    }

    handleOnClick = (event) => {
        event.preventDefault()
        api.postHotelDetails(this.state)
            .then(res => {
                console.log(res)
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/') }
            })
    }

    render () {
        return (
            <div>
                <NavigationContainer/>
                <Admin
                    state = {this.state}
                    onChange = {this.handleOnChange}
                    onClick = {this.handleOnClick}
                    showHotelsList = {this.showHotelsList}
                    showHome = {this.showHome}/>
            </div>

        )
    }
}

export default withRouter(AdminPage)
