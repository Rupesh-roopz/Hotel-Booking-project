import React from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios"

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    isUser(){
        axios.post('http://localhost:8800/users/login',this.state)
        .then( res => {
            console.log(res.status)
            // if(res.status === 200)
            // this.props.history.push('/login/signup')
            }
        )
        .catch(e => {
            this.props.history.push('/login/signup')
        })
    }

    handleOnclick = (event) => {
        event.preventDefault();
        this.setState({
            email : "",
            password : ""
        })
        this.isUser();  
    }

    render() {

        return(
            <div className="loginWrapper">
                <form onSubmit = {this.handleOnclick} className = "loginForm">
                <label htmlFor = "email">email</label>
                <input 
                    id ="email"
                    type = "text"
                    placeholder = "ex: JohnWick@example.com"
                    value = {this.state.email}
                    onChange = {this.handleOnChange}
                    required
                /><br/>
                <label htmlFor = "password">password</label>
                <input 
                    id ="password"
                    type = "password"
                    placeholder = "password"
                    value = {this.state.password}
                    onChange = {this.handleOnChange}
                    required
                /><br/>
                <button type = "submit">
                        Log in
                </button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);