import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
const uri = "https://nametreesfornaveeed.s3.us-west-2.amazonaws.com/index.html"
ReactDOM.render(
  

    <Auth0Provider
      domain="dev--f-9o7ez.us.auth0.com"
      clientId="cApQco8t8vfzyH2pXoojpL0XZeNlHYKP"
      redirectUri={uri}
    >
      <App />
    </Auth0Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
