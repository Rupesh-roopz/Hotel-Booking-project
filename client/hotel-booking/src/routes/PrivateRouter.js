import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component : Component }) => {
    const isLoggedin = sessionStorage.getItem('login')
    return (
        <Route render={props => (
            (isLoggedin)
                ? <Component {...props} />
                : <Redirect to="/" />
        )} />
    )
}

export default PrivateRoute
