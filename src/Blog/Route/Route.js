// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../Index'; 
import About from '../About'; 
import Contact from '../Contact';
import Clothes from '../Clothes';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Register from '../Login/register';
import Main from '../../ReactApi/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About title="About Us Page" />} /> 
        <Route path="/contact" element={<Contact title="Contact Us Page"  />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/main" element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;
