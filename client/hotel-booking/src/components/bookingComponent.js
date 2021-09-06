function BookingComponent (props) {
    let serilNo = 1
    if (!(Object.keys(props.booking).length)) {
        return <h1>please book a hotel</h1>
    } else {
        return (
            <div className = "container-flex">
                <table className = "table table-striped table-hover table-bordered table-sm">
                    <thead>
                        <tr>
                            <th scope = "col">S. No</th>
                            <th scope = "col">Hotel Name</th>
                            <th scope = "col">Date of Booking</th>
                            <th scope = "col">Check In Date</th>
                            <th scope = "col">Check Out Date</th>
                            <th scope = "col">Room Type</th>
                            <th scope = "col">Total days</th>
                            <th scope = "col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.booking.map((data) =>
                                <tr key = {data._id}>
                                    <td>{serilNo++}</td>
                                    <td>{data.hotelName}</td>
                                    <td>{data.dateOfBooking}</td>
                                    <td>{data.checkInDate}</td>
                                    <td>{data.checkOutDate}</td>
                                    <td>{data.typeOfRoom}</td>
                                    <td>{data.totalDays}</td>
                                    <td>{data.totalPrice}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookingComponent
