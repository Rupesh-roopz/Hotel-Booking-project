import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component : Component }) => {
    const isLoggedin = sessionStorage.getItem('token')
    return (
        <Route render={props => (
            (isLoggedin)
                ? <Component {...props} />
                : <Redirect to="/forbidden" />
        )} />
    )
}

export default PrivateRoute
