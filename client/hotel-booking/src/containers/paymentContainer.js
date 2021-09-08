import React from 'react'
import PaymentComponent from '../components/PaymentComponent'
import NavigationContainer from './NavigationContainer'
import PaymentSucessComponent from '../components/PaymentSucessComponent'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from '../Resources/index'
import http from '../constants/http'

class PaymentContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cardType : '',
            isPayment : false
        }
    }

    componentDidMount () {
        if (this.props.history.action === 'POP') {
            this.props.history.push('/main')
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnClick = () => {
        const bookedHotel = JSON.parse(sessionStorage.getItem('data'))
        api.postBookedHotelData(bookedHotel)
            .then((res) => {
                this.setState({
                    isPayment : true
                })
                toast.success('Payment Successfull')
                sessionStorage.removeItem('data')
            })
            .catch((e) => {
                console.log(e.response)
                if (e.response.status === http.UNAUTHORIZED) { this.props.history.push('/sessionExpired') }
            })
    }

    render () {
        toast.configure()
        if (!this.state.isPayment) {
            return (
                <>
                    <NavigationContainer/>
                    <PaymentComponent
                        onChange = {this.handleOnChange}
                        onClick = {this.handleOnClick}
                        cardChange = {this.handleCardChange}
                    />
                </>
            )
        } else {
            return (
                <>
                    <NavigationContainer/>
                    <PaymentSucessComponent
                        cardType={this.state.cardType}
                    />
                </>
            )
        }
    }
}

export default PaymentContainer
