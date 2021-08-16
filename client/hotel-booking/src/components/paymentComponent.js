function PaymentComponent (props) {
    console.log(props)
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="payment-wrapper">
                    <div className="payment-WrapperInside">
                        <h1 className="payment-font">Payment Details</h1>
                        <p>Choose your payment method</p>
                        <div className="row">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Credit Card"
                                    name="cardType"
                                    id="flexRadioDefault1"
                                    onChange={props.onChange}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                       Credit card
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="cardType"
                                    id="flexRadioDefault2"
                                    value="Debit Card"
                                    onChange={props.onChange}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Debit card
                                </label>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-3 card-Wrapper" >
                                <div>
                                    <label>CARD NUMBER</label><br/>
                                    <input
                                        type="text"
                                        className="col-11"
                                        required
                                    />
                                </div>
                                <div className="insideCard">
                                    <div className="insideCard-cvv">
                                        <label>CVV</label><br/>
                                        <input
                                            type="text"
                                            className="col-12"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>EXPIRY DATE</label><br/>
                                        <div className="insideCard">
                                            <div className="insideCard-expDate">
                                                <label>MM</label><br/>
                                                <input
                                                    type="text"
                                                    className="col-12"
                                                />
                                            </div>
                                            <div className="insideCard-expDate">
                                                <label>YY</label><br/>
                                                <input
                                                    type="text"
                                                    className="col-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-button-wrapper">
                            <button
                                className="btn btn-success"
                                onClick={props.onClick}
                            > Confirm Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentComponent
