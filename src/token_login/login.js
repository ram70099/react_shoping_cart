import React from 'react';
import {Navigate} from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super();
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token==null){
            loggedIn = false
        }
        this.state = {
            uesrname : "",
            password : "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault();
        const{username,password}= this.state;
        if(username === "admin" && password === "1"){
            localStorage.setItem("token","useridentify");
            this.setState({
                loggedIn:true
            })
        }
    }
    render(){
        if(this.state.loggedIn){
            return <Navigate to="/admin" />
        }
        return(
            <div style={{color:"green", fontSize:"20", textAlign:"center" }}> 
                <h1>Login</h1>
                <form onSubmit={this.submitForm}>
                    <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.onChange} />
                    <br></br>
                    <input type='password' placeholder='password' name='password' value={this.state.password} onChange={this.onChange}/>
                    <br></br>
                    <input type='submit' />
                </form>
            </div>
        )
    };
}
export default Login;