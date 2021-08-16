import React from 'react'
import VerifyBookedHotelComponent from '../components/verifyBookedHotelComponent'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'
import { withRouter } from 'react-router-dom'

class VerifyBookedHotelContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            bookedHotelData : []
        }
    }

    componentDidMount () {
        this.getHotelData()
    }

    getHotelData = () => {
        api.getSelectedHotelData()
            .then((res) => {
                console.log(res.data)
                this.setState({ bookedHotelData : res.data })
            })
            .catch((e) => {
                console.log(e.response)
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
            })
    }

    handleOnClick = () => {
        this.props.history.push('/payment')
    }

    render () {
        return (
            <>
                <NavigationContainer/>
                <VerifyBookedHotelComponent
                    state = { this.state}
                    onClick = {this.handleOnClick}
                />
            </>
        )
    }
}

export default withRouter(VerifyBookedHotelContainer)
