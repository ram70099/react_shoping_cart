import React from "react";
import {Link, Navigate} from "react-router-dom";

class Admin extends React.Component {
    constructor() {
        super();
        const token = localStorage.getItem('token');
        let loggedIn = true;
        if (token === null) {
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
    render(){
        if(this.state.loggedIn===false){
            return <Navigate to="/" />
        }
        return(
            <div>
                <h1>Admin Page</h1>
                <Link to="/logout">logout</Link>
            </div>
        )
    };
}
export default Admin;