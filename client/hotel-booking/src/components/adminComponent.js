function Admin (props) {
    return (
        <div className = "container">
            <div className="col-3">
                <button
                    className="btn btn-primary"
                    onClick = {props.showHotelsList}>
                        Show Hotels
                </button>
            </div>
            <div className = "row">
                <form onSubmit = {props.onClick}>
                    <div className = "row">
                        <div className = "col">
                            <label
                                htmlFor = "hotelName"
                                className = "form-label">
                                        Hotel Name
                            </label>
                        </div>
                        <div className = "row">
                            <div className = "col-3">
                                <input
                                    id = "hotelName"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.hotelName}
                                    required
                                />
                            </div>
                            <div className = "col-9"></div>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-4">
                            <label
                                htmlFor = "totalRooms"
                                className = "form-label">
                                    Total Number of Rooms
                            </label>
                            <input
                                id = "totalRooms"
                                type = "number"
                                className = "form-control"
                                value = {props.state.totalRooms}
                                onChange = {props.onChange}
                                required
                            />
                        </div>
                        <div className = "col-4">
                            <label
                                htmlFor = "roomsAvailable"
                                className = "form-label">
                                    Number of Rooms Available
                            </label>
                            <input
                                id = "roomsAvailable"
                                type = "number"
                                className = "form-control"
                                value = {props.state.roomsAvailable}
                                onChange = {props.onChange}
                                required
                            />
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-6">
                            <label
                                htmlFor = "address"
                                className = "form-label">
                                    Address
                            </label>
                            <input
                                id = "address"
                                type = "text"
                                className = "form-control"
                                onChange = {props.onChange}
                                value = {props.state.address}
                                required
                            />
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <label
                                htmlFor = "phone"
                                className = "form-label">
                                    Phone Number
                            </label>

                        </div>
                        <div className = "row">
                            <div className = "col-3">
                                <input
                                    id = "phone"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.phone}
                                    required
                                />
                            </div>
                            <div className = "col-9"></div>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-6">
                            <label
                                htmlFor = "description"
                                className = "form-label">
                                    Description
                            </label>
                            <textarea
                                id = "description"
                                type = "text"
                                className = "form-control"
                                onChange = {props.onChange}
                                value = {props.state.description}
                                rows = "4"
                                cols = "50"
                                required
                            />
                        </div>
                    </div>
                    {/* <div className = "row">
                        <fieldset>
                            <legend>
                                    Location Co-ordinates
                            </legend>
                            <div className = "col-4">
                                <label
                                    htmlFor = "longitude"
                                    className = "form-label">
                                        Longitude
                                </label>
                                <input
                                    id = "longitude"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.longitude}
                                    required
                                />
                            </div>
                            <div className = "col-4">
                                <label
                                    htmlFor = "lattitude"
                                    className = "form-label">
                                        Lattitude
                                </label>
                                <input
                                    id = "lattitude"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.lattitude}
                                    required
                                />
                            </div>
                        </fieldset>
                    </div> */}
                    <div className = "row">
                        <fieldset>
                            <legend>
                                    Price
                            </legend>
                            <div className = "col-4">
                                <label
                                    htmlFor = "singleRoom"
                                    className = "form-label">
                                        Single Room
                                </label>
                                <input
                                    id = "singleRoom"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.singleRoom}
                                    required
                                />
                            </div>
                            <div className = "col-4">
                                <label
                                    htmlFor = "doubleRoom"
                                    className = "form-label">
                                        Double Room
                                </label>
                                <input
                                    id = "doubleRoom"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.doubleRoom}
                                    required
                                />
                            </div>
                            <div className = "col-4">
                                <label
                                    htmlFor = "suitRoom"
                                    className = "form-label">
                                        Suit Room
                                </label>
                                <input
                                    id = "suitRoom"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.suitRoom}
                                    required
                                />
                            </div>
                        </fieldset>
                    </div>
                    <div className = "col">
                        <button
                            type = "sumbit"
                            className = "btn btn-primary">
                                 Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Admin
