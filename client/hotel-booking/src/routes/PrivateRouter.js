import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import ForbiddenContainer from '../containers/ForbiddenContainer'
import { useHistory } from 'react-router'

const PrivateRoute = ({ component : Component, ...rest }) => {
    const history = useHistory()
    const [shared, setToken] = useState(0)
    const sessionStorageTransfer = (event) => {
        if (!event) { event = window.event }
        if (!event.newValue) return
        if (event.key === 'getSessionStorage') {
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
            localStorage.removeItem('sessionStorage')
        } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
            const data = JSON.parse(event.newValue)
            for (const key in data) {
                sessionStorage.setItem(key, data[key])
            }
            setToken(sessionStorage.getItem('token'))
        }
        if (event.key === 'CREDENTIALS_FLUSH' && sessionStorage.length) {
            sessionStorage.clear()
            history.push('/login')
        }
    }

    useEffect(() => {
        if (!sessionStorage.length) {
            localStorage.setItem('getSessionStorage', 'foobar')
            localStorage.removeItem('getSessionStorage', 'foobar')
        };
        if (window.addEventListener) {
            window.addEventListener('storage', sessionStorageTransfer, false)
        } else {
            window.attachEvent('onstorage', sessionStorageTransfer)
        };
    }, [shared])

    const loginId = sessionStorage.getItem('token')
    if (sessionStorage.length && loginId) {
        if ((rest.role === 'ADMIN' || rest.role === 'USER') && JSON.parse(sessionStorage.getItem('isAdmin'))) {
            return (
                <Route {...rest} render = {props =>
                    <Component {...props} />
                } />
            )
        } else if (rest.role === 'USER' && !JSON.parse(sessionStorage.getItem('isAdmin'))) {
            return (
                <Route {...rest} render = {props =>
                    <Component {...props} />
                } />
            )
        } else {
            return <ForbiddenContainer/>
        }
    } else {
        return <ForbiddenContainer/>
    }
}

export default PrivateRoute
