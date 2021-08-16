import { Link } from 'react-router-dom'

function NavigationComponent (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <div className=" navbar-collapse navBarStyle" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/main">Home</Link>
                        </li>
                        <li className="nav-item">
                            {(props.state.isAdmin)
                                ? <Link className="nav-link active" aria-current="page" to="/hotelsList">Hotels List</Link>
                                : <div/>}
                        </li>
                        <li className="nav-item">
                            {(props.state.isAdmin)
                                ? <Link className="nav-link active" aria-current="page" to="/admin">Add Hotel</Link>
                                : <div/>}
                        </li>
                    </ul>
                    <div className="profileWrapper">
                        <div className="dropdown">
                            <i className="material-icons-outlined profileIcon" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        account_circle
                            </i>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" onClick={props.myProfile}>Profile</a></li>
                                <li><a className="dropdown-item" onClick={props.bookings}>Bookings</a></li>
                                <li><a className="dropdown-item" onClick={props.logout}>Logout</a></li>
                            </ul>
                        </div>
                        Welcome {props.state.userName}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationComponent
