import React from "react";
import {Link } from "react-router-dom";

export default class Home extends React.Component{

    render() {
        return (
            <div className="homeWrapper">   
                <Link to="/login">
                <button>Log in</button>
                </Link><br/>
                <Link to="/signup">
                <button >Sign Up</button>
                </Link>
            </div>
        )
}

}
