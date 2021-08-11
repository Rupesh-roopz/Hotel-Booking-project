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
import PrivateRoute from './PrivateRouter'

function Router () {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PrivateRoute path="/BookHotel" component={BookedHotelContainer }/>
                    <PrivateRoute path="/hotelPreview" component={HotelPreviewContainer }/>
                    <PrivateRoute path="/main" component={HotelsFeedContainer }/>
                    <PrivateRoute path="/hotelsList" component={HotelsList}/>
                    <PrivateRoute path="/admin" component={AdminPage}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component = { Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
