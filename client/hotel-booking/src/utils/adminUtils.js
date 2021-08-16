export function hotelValidation (state) {
    const hotelValidationError = {}
    if (state.hotelName.length <= 6) {
        hotelValidationError.hotelNameError = 'Please enter Full Hotel Name'
    }
    if (state.roomsAvailable.trim() === '') {
        hotelValidationError.roomsAvailableEmptyError = 'Please enter Available Rooms'
    }
    if (state.totalRooms.trim() === '') {
        hotelValidationError.totalRoomsError = 'Please enter total Rooms'
    }
    if (state.address.trim() === '') {
        hotelValidationError.addressError = 'Please enter address'
    }
    if (state.Single.trim() === '') {
        hotelValidationError.SingleError = 'Please enter price for single room'
    }
    if (state.Double.trim() === '') {
        hotelValidationError.DoubleError = 'Please enter price for Double room'
    }
    if (state.Suit.trim() === '') {
        hotelValidationError.SuitError = 'Please enter price for Suit room'
    }
    if (state.phone.length < 10) {
        hotelValidationError.phoneNumberError = 'Please enter Valid mobile number'
    }
    if (state.totalRooms < state.roomsAvailable) {
        hotelValidationError.roomsAvailableError = 'Please enter correct availability of rooms'
    }
    if (state.description.length < 50) {
        hotelValidationError.descriptionError = 'Please describe more'
    }
    return hotelValidationError
}
