function Admin (props) {
    return (
        <div className = "container" data-testid='admin-container'>
            <div className="row hotelAdd-header">
                <div><h1>Add New Hotel Details</h1></div>
            </div>
            <div className = "row">
                <div className="hotelSucess-bar">
                    {(props.state.isSucessfull === true)
                        ? <div className="hotelSucess-barInside">
                            <p className="hotelSucess-message">Hotel data Sucessfully added...</p>
                        </div>
                        : <div/>}
                </div>
                <form onSubmit = {props.onSubmit}>
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
                                    data-testid='admin-hotelName'
                                    required
                                />
                                {!(props.state.error === null)
                                    ? <div className="errors-class">
                                        {props.state.error.hotelNameError}
                                    </div>
                                    : <div/>}
                                {(props.state.serverError.hotelExistsError !== undefined)
                                    ? <div className="errors-class">
                                        {props.state.serverError.hotelExistsError.errorMessage}
                                    </div>
                                    : <div></div>}
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
                                data-testid='admin-totalRooms'
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
                                data-testid='admin-roomsAvailable'
                                required
                            />
                            {!(props.state.error === null)
                                ? <div className="errors-class">
                                    {props.state.error.roomsAvailableError}
                                </div>
                                : <div/>}
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
                                data-testid='admin-address'
                                required
                            />
                            {!(props.state.error === null)
                                ? <div className="errors-class">
                                    {props.state.error.addressError}
                                </div>
                                : <div/>}
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
                                    data-testid='admin-phone'
                                    required
                                />
                                {!(props.state.error === null)
                                    ? <div className="errors-class">
                                        {props.state.error.phoneNumberError}
                                    </div>
                                    : <div/>}
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
                                data-testid='admin-description'
                                required
                            />
                            {!(props.state.error === null)
                                ? <div className="errors-class">
                                    {props.state.error.descriptionError}
                                </div>
                                : <div/>}
                        </div>
                    </div>
                    <div className = "row">
                        <fieldset>
                            <legend>
                                            Price
                            </legend>
                            <div className = "col-4">
                                <label
                                    htmlFor = "Single"
                                    className = "form-label">
                                                Single Room
                                </label>
                                <input
                                    id = "Single"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.Single}
                                    data-testid='admin-singleRoomPrice'
                                    required
                                />
                                {!(props.state.error === null)
                                    ? <div className="errors-class">
                                        {props.state.error.SingleError}
                                    </div>
                                    : <div/>}
                            </div>
                            <div className = "col-4">
                                <label
                                    htmlFor = "Double"
                                    className = "form-label">
                                                Double Room
                                </label>
                                <input
                                    id = "Double"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.Double}
                                    data-testid='admin-doubleRoomPrice'
                                    required
                                />
                                {!(props.state.error === null)
                                    ? <div className="errors-class">
                                        {props.state.error.DoubleError}
                                    </div>
                                    : <div/>}
                            </div>
                            <div className = "col-4">
                                <label
                                    htmlFor = "Suit"
                                    className = "form-label">
                                                Suit Room
                                </label>
                                <input
                                    id = "Suit"
                                    type = "text"
                                    className = "form-control"
                                    onChange = {props.onChange}
                                    value = {props.state.Suit}
                                    data-testid='admin-suitRoomPrice'
                                    required
                                />
                                {!(props.state.error === null)
                                    ? <div className="errors-class">
                                        {props.state.error.SuitError}
                                    </div>
                                    : <div/>}
                            </div>
                        </fieldset>
                    </div>
                    <div className = "col hotelAdd-buttonWrapper">
                        <button
                            type = "sumbit"
                            className = "btn btn-primary"
                            data-testid='admin-saveButton'
                        >
                                         Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admin
