import React from 'react'
import PaymentComponent from '../components/paymentComponent'
import NavigationContainer from './navigationContainer'
import PaymentSucessComponent from '../components/paymentSucessComponent'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class PaymentContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cardType : '',
            isPayment : false
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnClick = () => {
        this.setState({
            isPayment : true
        })
        toast.success('Payment Successfull')
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
