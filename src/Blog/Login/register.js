import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import Header from "../Common/Header";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", password:"",  data: [], };
        this.submit = this.submit.bind(this);
      }

    submit(evt) {
        evt.preventDefault();
        let fd = new FormData();
        fd.append("name", this.state.name);
        fd.append("email", this.state.email);
        fd.append("password", this.state.password);  
        axios
          .post("http://localhost/react/login.php", fd)
          .then((res) => {
            Swal.fire({
              title: "Reactjs",
              text: res.data.d,
              icon: "success", 
            });
          })
      }

    render()
    {
  return (
    <>
    <Header/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h2 className="text-center">Register</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input  type="text"  className="form-control" onChange={(e) => this.setState({ name: e.target.value })} id="name"  placeholder="Enter your full name"  required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input  type="email"  className="form-control"  id="email" onChange={(e) => this.setState({ email: e.target.value })}  placeholder="Enter your email"  required/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input  type="password"  className="form-control" onChange={(e) => this.setState({ password: e.target.value })} id="password"  placeholder="Enter your password"  required/>
              </div>
              <button type="submit"  onClick={this.submit} className="btn btn-primary w-100">
                Register
              </button>
              <button className="form-control">
              <Link to="/login">Login</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}};

export default Register;
