import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../containers/LoginContainer'
import Home from '../containers/HomeContainer'
import SignUp from '../containers/SignupContainer'
import HotelsList from '../containers/HotelsListContainer'
import HotelsFeedContainer from '../containers/HotelsFeedContainer'
import AdminPage from '../containers/AdminContainer'
import HotelPreviewContainer from '../containers/HotelPreviewContainer'
import BookedHotelContainer from '../containers/BookedHotelContainer'
import VerifyBookedHotelContainer from '../containers/VerifyBookedHotelContainer'
import PaymentComponent from '../containers/PaymentContainer'
import ProfileContainer from '../containers/ProfileContainer'
import BookingContainer from '../containers/BookingsContainer'
import Pagination from '../components/PaginationComponent'
import ForbiddenContainer from '../containers/ForbiddenContainer'
import SessionExpiredComponent from '../components/SessionExpiredComponent'
import PrivateRoute from './PrivateRouter'
import role from '../constants/Roles'

function Router () {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PrivateRoute path="/pagination" component={ Pagination } role={role.user}/>
                    <PrivateRoute path="/myBookings" component={ BookingContainer } role={role.user}/>
                    <PrivateRoute path="/profile" component={ ProfileContainer } role={role.user}/>
                    <PrivateRoute path="/payment" component={ PaymentComponent } role={role.user}/>
                    <PrivateRoute path="/verifyBookedHotel" component={ VerifyBookedHotelContainer } role={role.user}/>
                    <PrivateRoute path="/BookHotel" component={ BookedHotelContainer } role={role.user}/>
                    <PrivateRoute path="/hotelPreview" component={ HotelPreviewContainer } role={role.user}/>
                    <PrivateRoute path="/main" component={HotelsFeedContainer } role={role.user}/>
                    <PrivateRoute path="/hotelsList" component={ HotelsList } role={role.admin}/>
                    <PrivateRoute path="/admin" component={ AdminPage } role={role.admin}/>
                    <Route path="/sessionExpired" component={ SessionExpiredComponent }/>
                    <Route path="/forbidden" component={ ForbiddenContainer }/>
                    <Route path="/signup" component={ SignUp }/>
                    <Route path="/login" component={ Login }/>
                    <Route path="/" component = { Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
