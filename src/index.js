import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './Shoping_cart/css/style.css';
import './Shoping_cart/css/style.min.css';
// import App from './token_login/Token_auth';
// import App from './Blog/Route/Route';
// import App from './Shoping_cart/Index';
import App from './Shoping_cart/Route/Route';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const CLIENT_ID = "64314456129-a6t65hjd4u60jndqnsdu16nmo3h8qgd3.apps.googleusercontent.com";

// Make sure 'root' element exists in your index.html file
const rootElement = document.getElementById('root'); 

// Check if rootElement exists before initializing the root
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
