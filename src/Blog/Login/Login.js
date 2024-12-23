import React from "react";
import { Link,Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "../Common/Header";
class Login extends React.Component {

    constructor(props) {
       localStorage.getItem("token");
        super(props);
        this.state = { email: "", password:"",  login: false };
        this.submit = this.submit.bind(this);
      }

      submit(evt) {
        evt.preventDefault();
        let fd = new FormData();
        fd.append("email", this.state.email);
        fd.append("password", this.state.password);  
    
        axios
          .post("http://localhost/react/login.php", fd)
          .then((res) => {
            if (res.data.success) {
				      this.setState({login:true});
              localStorage.setItem("token","access");
            }
            else{
              Swal.fire({
                title: "Login Failed",
                text: res.data.user,
                icon: "error", 
              })
              .then(()=>{
                window.location.href="/login";
              })
            }
          })
      }

      render(){
        if(this.state.login){
          return <Navigate to="/"/>
      }
  return (
    <>
    <Header/>
    <div className="container mt-5">
    <h2>{this.state.login?"login successfull":null}</h2>
    
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h2 className="text-center">Login</h2>
            <form onSubmit={this.submit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input  type="email"  className="form-control" onChange={(e) => this.setState({ email: e.target.value })} id="email"  placeholder="Enter your email"  required/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input  type="password"  className="form-control" onChange={(e) => this.setState({ password: e.target.value })} id="password"  placeholder="Enter your password"  required/>
              </div>
              <button type="submit"  className="btn btn-primary w-100">
                Login
              </button>
              <button className="form-control">
              <Link to="/register">Register</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
);
}};

export default Login;
