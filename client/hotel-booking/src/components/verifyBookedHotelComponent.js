function VerifyBookedHotelComponent (props) {
    console.log(props)
    return (
        <div className="container-fluid bookedHotel-wrapperOutside">
            <div className="bookedHotel-wrapper">
                <div>
                    <label className="bookedHotel-label">
                    Recipient Name :
                    </label>
                    <span>{sessionStorage.getItem('userName')}</span>
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Hotel Name :
                    </label>
                    <span>{props.state.bookedHotelData.hotelName}</span>
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Check In Date:
                    </label>
                    <span>{props.state.bookedHotelData.checkInDate}</span>
                </div>
                <div>
                    <label className="bookedHotel-label">
                    check Out Date :
                    </label>
                    <span>{props.state.bookedHotelData.checkOutDate}</span>
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Room type :
                    </label>
                    <span>{props.state.bookedHotelData.typeOfRoom}</span>
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Total Days :
                    </label>
                    <span>{props.state.bookedHotelData.totalDays}</span>
                </div>
                <div>
                    <label className="bookedHotel-label">
                    Total Price :
                    </label>
                    <span>{props.state.bookedHotelData.totalPrice}/-</span>
                </div>
                <div className='bookingButton-wrapper'>
                    <button
                        className="btn btn-primary bookedHotel-button"
                        onClick = {props.onClick}
                    >
                    Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerifyBookedHotelComponent
