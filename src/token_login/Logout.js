import React from "react";
import {Link} from "react-router-dom";

class Logout extends React.Component {
    constructor() {
        super();
        localStorage.removeItem("token");
    }
    render()
    {
        return(
            <div>
                <h1>You have been Logout</h1>
                <Link to="/">Go To Login Page</Link>
            </div>
        )
    };
}
export default Logout;