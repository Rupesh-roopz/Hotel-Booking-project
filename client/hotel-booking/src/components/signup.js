import React from "react";
import axios from "axios"
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component{
    constructor(props){
        super(props);        
        this.state={
            name : "",
            email : "",
            mobileNumber : "",
            age : "",
            idProofNumber : "",
        } 
    }

    handleOnChange=(event)=>{
         this.setState({
        [ event.target.id ]: event.target.value
        })
    }

    handleOnClick=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8800/users/signIn",this.state)
        .then(res => console.log(res))
        .catch(e => console.log(e))
        this.setState({
            name : "",
            email : "",
            mobileNumber : "",
            age : "",
            idProofNumber : "",
        })
        this.props.history.push('/login')

    }
    render() {
        return (
            <div id="signinWrapper">
                <form ref={this.formRef} onSubmit={this.handleOnClick} id="signinForm">
                    <label className="signInLabel" htmlFor = "fullName">Full Name</label>
                    <input
                        id = "name"
                        type = "text"
                        className = "signInClass"
                        value= {this.state.name}
                        onChange = {this.handleOnChange}  
                        required  
                    /><br/>
                    <label className="signInLabel" htmlFor = "email">Email</label>
                    <input
                        id = "email"
                        type = "text"
                        className = "signInClass"
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    /><br/>
                    <label className="signInLabel" htmlFor = "phoneNumber">Phone Number</label>
                    <input
                        id = "mobileNumber"
                        type = "text"
                        className = "signInClass"
                        value = {this.state.mobileNumber}
                        onChange = {this.handleOnChange}
                        required
                    /><br/>
                    <label className="signInLabel" htmlFor = "idProofNumber">ID Proof Number</label>
                    <input
                        id = "idProofNumber"
                        type = "text"
                        className = "signInClass"
                        value = {this.state.idProofNumber}
                        onChange={this.handleOnChange}
                        required
                    /><br/>
                    <label className="signInLabel" htmlFor = "age">Age</label>
                    <input
                        id = "age"
                        type = "number"
                        className = "signInClass"
                        value = {this.state.age}
                        onChange = {this.handleOnChange}
                        required
                    /><br/>
                    <button type = "sumbit">Submit</button> 
                </form>
            </div>
        )
}

}

export default withRouter(SignUp);