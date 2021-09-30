import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
//Import đa ngôn ngữ
import './i18n';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist//js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";


// Main CSS
// import "./scss/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
          ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


