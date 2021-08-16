import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../containers/loginContainer'
import Home from '../containers/homeContainer'
import SignUp from '../containers/signupContainer'
import HotelsList from '../containers/hotelsListContainer'
import HotelsFeedContainer from '../containers/hotelsFeedContainer'
import AdminPage from '../containers/adminContainer'
import HotelPreviewContainer from '../containers/hotelPreviewContainer'
import BookedHotelContainer from '../containers/bookedHotelContainer'
import VerifyBookedHotelContainer from '../containers/verifyBookedHotelContainer'
import PaymentComponent from '../containers/paymentContainer'
import ProfileContainer from '../containers/profileContainer'
import BookingContainer from '../containers/bookingsContainer'
import Pagination from '../components/paginationComponent'
import ForbiddenContainer from '../containers/forbiddenContainer'
import PrivateRoute from './PrivateRouter'

function Router () {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PrivateRoute path="/pagination" component={Pagination }/>
                    <PrivateRoute path="/myBookings" component={BookingContainer }/>
                    <PrivateRoute path="/profile" component={ProfileContainer }/>
                    <PrivateRoute path="/payment" component={PaymentComponent }/>
                    <PrivateRoute path="/verifyBookedHotel" component={VerifyBookedHotelContainer }/>
                    <PrivateRoute path="/BookHotel" component={BookedHotelContainer }/>
                    <PrivateRoute path="/hotelPreview" component={HotelPreviewContainer }/>
                    <PrivateRoute path="/main" component={HotelsFeedContainer }/>
                    <PrivateRoute path="/hotelsList" component={HotelsList}/>
                    <PrivateRoute path="/admin" component={AdminPage}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/forbidden" component={ForbiddenContainer}/>
                    <Route path="/" component = { Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
