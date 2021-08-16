import { useHistory } from 'react-router'
export default function ForbiddenComponent () {
    const history = useHistory()
    setTimeout(async () => {
        await history.push('/')
    }, 3000)
    return (<div className="container-fluid forbidden-wrapper">
        <div>
            <h1 className="forbidden-header">
                Forbidden...
            </h1>
            <h4 className="forbidden-text">You dont have permission to access this page</h4>
        </div>
    </div>)
}
