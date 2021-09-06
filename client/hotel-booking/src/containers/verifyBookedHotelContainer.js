import React from 'react'
import VerifyBookedHotelComponent from '../components/VerifyBookedHotelComponent'
import NavigationContainer from './NavigationContainer'
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
        const myData = JSON.parse(sessionStorage.getItem('data'))
        console.log(myData)
        this.setState({ bookedHotelData : myData })
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
