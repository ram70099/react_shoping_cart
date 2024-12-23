import React from "react";
import {Navigate} from "react-router-dom";

class Logout extends React.Component {
    constructor() {
        super();
        localStorage.removeItem("token");
    }
    render()
    {
        return(
            <div>
                <Navigate to="/" />
            </div>
        )
    };
}
export default Logout;

