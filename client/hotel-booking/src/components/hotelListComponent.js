import React from 'react'

function HotelList (props) {
    let serilNo = 1
    return (
        <div className = "container-flex">
            <table className = "table table-striped table-hover table-bordered table-sm">
                <caption>Available Hotels</caption>
                <thead>
                    <tr>
                        <th scope = "col">S. No</th>
                        <th scope = "col">Hotel Name</th>
                        <th scope = "col ">Total Rooms</th>
                        <th scope = "col">Available Rooms</th>
                        <th scope = "col">Address</th>
                        <th scope = "col">Phone</th>
                        <th scope = "col">Single Room Price</th>
                        <th scope = "col">Double Room Price</th>
                        <th scope = "col">Suit Room Price</th>
                        <th scope = "col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.hotelsList.map((data) =>
                            <tr key = {data._id}>
                                <td>{serilNo++}</td>
                                <td>{data.hotelName}</td>
                                <td>{data.totalRooms}</td>
                                <td>{data.roomsAvailable}</td>
                                <td>{data.address}</td>
                                <td>{data.phone}</td>
                                <td>{data.Single}</td>
                                <td>{data.Double}</td>
                                <td>{data.Suit}</td>
                                <td>{data.description}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HotelList
