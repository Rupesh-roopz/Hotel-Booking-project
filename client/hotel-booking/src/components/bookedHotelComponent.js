function BookedHotelComponent (props) {
    return (
        <div className = "container-fluid " >
            <div className = "row bookedHotel-name-Wrapper hotelNameFont">{props.state.hotelData.hotelName}</div>
            <div className = "col-4 bookedHotel-form-Wrapper " >
                <form onSubmit = {props.onSubmit} className = "bookedHotel-Form">
                    <div className = "container-fluid">
                        <div className = "row inputContainer">
                            <div className = "col">
                                <label
                                    htmlFor = "dateOfBooking"
                                    className = "form-label">
                                    Date of Booking
                                </label>
                                <input
                                    id = "dateOfBooking"
                                    className = "form-control"
                                    value = {props.state.dateOfBooking}
                                    readOnly
                                    required
                                />
                            </div>
                        </div>
                        <div className = "row inputContainer">
                            <div className = "col">
                                <label
                                    htmlFor = "checkInDate"
                                    className = "form-label">
                                    Check In Date
                                </label>
                                <input
                                    id = "checkInDate"
                                    type = "Date"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.checkInDate}
                                    min = {props.state.currentDate}
                                    required
                                />
                            </div>
                        </div>
                        <div className = "row inputContainer">
                            <div className = "col">
                                <label
                                    htmlFor = "checkOutDate"
                                    className = "form-label">
                                    Check Out Date
                                </label>
                                <input
                                    id = "checkOutDate"
                                    type = "Date"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.checkOutDate}
                                    min = {props.state.checkInDate}
                                    required
                                />
                            </div>
                        </div>
                        <div className = "row inputContainer">
                            <div className = "col">
                                <label
                                    htmlFor = "roomType"
                                    className = "form-label">
                                    Select Room Type
                                </label>
                                <select id = "roomType"
                                    onChange = {props.onChange}
                                    value = {props.state.roomType}
                                    required
                                >   <option value = "">room type</option>
                                    <option value = "Single">Single Room</option>
                                    <option value = "Double">Double Room</option>
                                    <option value = "Suit">Suit Room</option>
                                </select>
                            </div>
                        </div>
                        <div className = "row inputContainer">
                            <button
                                type = "submit"
                                className = "btn btn-primary col"
                            >View Booking Details</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookedHotelComponent
