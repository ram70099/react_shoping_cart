import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom"; // Correct imports
import Login from './login';
import Admin from './Admin';
import Logout from './Logout';

class Token_Auth extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
export default Token_Auth;