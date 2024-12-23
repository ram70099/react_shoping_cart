import React, { useState } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [load, setLoading] = useState(false);
  const [register, setRegister] = useState(false);

  const submit = async (evt) => {
    evt.preventDefault();

    if (password !== conPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match.",
        icon: "error",
      });
      return;
    }
    const registerData = { name, email, password };
      setLoading(true);
      const response = await axios.post("http://localhost:8000/api/register", registerData);
     
      if (response.data.success) {
        setRegister(true);
        Swal.fire({
          title: "Success",
          text: response.data.message || "Registration successful!",
          icon: "success",
        });

      } else {
        Swal.fire({
          title: "Error",
          text: response.data.message || "Registration failed.",
          icon: "error",
        });
      }
      setRegister(true);
      setLoading(false);
  };

  return (
    <>
      {register ? (
        <Navigate to="/login" />
      ) : (
        <div className="container">
          <div className="main_div">
            <div className="title">Register Form</div>
            <form onSubmit={submit}>
              <div className="input_box">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
                <div className="icon">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="input_box">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Enter your email"
                  required
                />
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Enter your password"
                  required
                />
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setConPassword(e.target.value)}
                  id="con-password"
                  placeholder="Confirm your password"
                  required
                />
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <div className="input_box button">
                <input type="submit" value={load ? "Loading..." : "Register"} />
              </div>
              <div className="sign_up">
                Already have an account? <a href="/login">Login now</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
