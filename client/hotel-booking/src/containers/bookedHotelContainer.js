import React from 'react'
import BookedHotelComponent from '../components/bookedHotelComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import api from '../Resources/index'

class BookedHotelContainer extends React.Component {
    constructor (props) {
        super(props)
        const date = new Date()
        this.state = {
            dateOfBooking : date.toDateString(),
            currentDate : '',
            checkInDate : '',
            checkOutDate : '',
            roomType : '',
            hotelData : {},
            userData : {}
        }
    }

    componentDidMount () {
        this.getSelectedHotelDetails()
        this.getuserDetails()
        this.minimumDate()
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    getSelectedHotelDetails = () => {
        api.getHotelData()
            .then((res) => {
                this.setState({ hotelData : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
            })
    }

    getuserDetails =() => {
        api.getUserData()
            .then((res) => {
                this.setState({ userData : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
            })
    }

    minimumDate = () => {
        let currentDate = new Date()
        let date = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        if (date < 10) { date = '0' + date }
        if (month < 10) { month = '0' + month }
        currentDate = year + '-' + month + '-' + date
        this.setState({
            currentDate : currentDate
        })
    }

    dayInSeconds = (currentDate) => {
        const yyyy = currentDate.slice(0, 4)
        const mm = currentDate.slice(5, 7)
        const dd = currentDate.slice(8, 10)
        const d = Date.UTC(yyyy, mm, dd)
        return d
    }

    totalDays () {
        const checkOutDateTime = this.dayInSeconds(this.state.checkOutDate)
        const checkInDateTime = this.dayInSeconds(this.state.checkInDate)
        const difference = checkOutDateTime - checkInDateTime
        const days = difference / (1000 * 3600 * 24)
        this.setState({
            totalDay : days
        })
        return days
    }

    totalPrice () {
        const myObj = this.state.hotelData
        console.log(myObj)
        const roomType = this.state.roomType
        console.log(roomType)
        const price = myObj[roomType] * this.totalDays()
        return price
    }

    postHotelData = () => {

    }

    onSubmit = (event) => {
        event.preventDefault()
        this.totalDays()
        this.totalPrice()
        this.postHotelData()
        const bookedHotelData = {
            hotelName : this.state.hotelData.hotelName,
            recipientName : sessionStorage.getItem('userName'),
            dateOfBooking : this.state.currentDate,
            checkInDate : this.state.checkInDate,
            checkOutDate : this.state.checkOutDate,
            typeOfRoom : this.state.roomType,
            totalPrice : this.totalPrice(),
            totalDays : this.totalDays()
        }
        api.postBookedHotelData(bookedHotelData)
            .then((res) => {
                console.log(res.data)
                sessionStorage.setItem('bookedHotelId', res.data.bookedHotelId)
                this.props.history.push('/verifyBookedHotel')
            })
            .catch((e) => {
                console.log(e.response)
            })
    }

    render () {
        return (
            <div>
                <NavigationContainer/>
                <BookedHotelComponent
                    state = {this.state}
                    onSubmit = {this.onSubmit}
                    onChange = {this.handleOnChange}
                    minimumDate = {this.minimumDate}
                />
            </div>
        )
    }
}

export default withRouter(BookedHotelContainer)
