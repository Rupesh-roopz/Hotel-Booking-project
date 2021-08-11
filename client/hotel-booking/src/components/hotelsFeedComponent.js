import React from 'react'
import hotelImg from '../asserts/images/hotelImg.jpg'

function HotelsFeedComponent (props) {
    return (
        <div className="container-fluid">  {
            props.state.hotelsList.map((hotel) => (
                <div key={hotel._id} className= "row" id="hotelID">
                    <div className="col-4 hotelData">
                        <img src={hotelImg} alt="hotelImage" onClick={props.onClick}/>
                    </div>
                    <div className="col-4" >
                        <div className="row" onClick={props.onClick}>
                            <p id="nameFont" >{hotel.hotelName}</p>
                        </div>
                        <div className="row" id="descriptionFonts">
                            <p>{hotel.description}</p>
                        </div>
                    </div>
                    <div className="col-4 hotelData">
                        <p id="priceID">Starting from : {hotel.singleRoom}/-</p>
                        <button className="btn btn-primary" onClick={() => { props.hotelPreview(hotel.hotelName) }}>Show Details</button>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default HotelsFeedComponent
