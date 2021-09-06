import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

export default function SessionExpiredComponent () {
    const history = useHistory()
    useEffect(() => {
        if (sessionStorage.length) { sessionStorage.clear() }
    }, [])
    return (
        <div className="container-fluid sessionExpired-wrapper">
            <h1 className="sessionExpired-header">
            Session Expired
            </h1>
            <p className="sessionExpired-text">You will be redirected to login page</p>
            <button
                className="btn btn-primary expire-button"
                onClick={() => history.push('/login')}
            >
                OK
            </button>
        </div>
    )
}
