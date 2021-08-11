import React from 'react'
import hotelImg from '../asserts/images/hotelImg.jpg'
import '../asserts/css/hotelPreviewComponent.css'

function HotelPreviewComponent (props) {
    return (
        <div className="container-fluid">
            <div className="row" id="main_Row">
                <div className = "container main-container">
                    <div className = "row">
                        <div className="col-6 flexMiddle" id="hotelPreviewImage">
                            <div className="row">
                                <img src={hotelImg} alt="hotelImage" className="border-style"/>
                            </div>
                            <div className="row">
                                <p className ="hotelNameFont">{props.hotel.hotelName}</p>
                            </div>
                            <div className="row">
                                <p className="descriptionFont border-style">
                                    {props.hotel.description}</p>
                            </div>
                        </div>
                        <div className="col-6 border-style">
                            <div className="row ">
                                <p className ="hotelNameFont">{props.hotel.hotelName}</p>
                            </div>
                            <div className="row">
                                <p className="fonts">Address :  {props.hotel.address}</p>
                            </div>
                            <div className="row">
                                <p className="fonts">
                                    Contact
                                    <i className="material-icons-outlined">call</i> : {props.hotel.phone}
                                </p>
                            </div>
                            <div className="row">
                                <p className="fonts">
                                    Rooms available Now :  {props.hotel.roomsAvailable}
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <p>Single Room : {props.hotel.singleRoom}/-</p>
                                </div>
                                <div className="col-4">
                                    <p>Double Room : {props.hotel.doubleRoom}/-</p>
                                </div>
                                <div className="col-4">
                                    <p>Suit Room : {props.hotel.suitRoom}/-</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick = {props.onBooked} >
                                            Book Hotel
                                    </button>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HotelPreviewComponent
