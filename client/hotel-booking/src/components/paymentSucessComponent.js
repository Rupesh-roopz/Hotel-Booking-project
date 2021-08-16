import { useHistory } from 'react-router-dom'

function PaymentSucessComponent (props) {
    const history = useHistory()
    setTimeout(async () => {
        await history.push('/myBookings')
    }, 5000)
    return (
        <div className="container-fluid payment-success">
            <div className="paymentSuccess-wrapper">
                <div className="paymentSuccess-insideWrapper">
                    <p className="paymentSuccess-font">Payment successful with {props.cardType}</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentSucessComponent
