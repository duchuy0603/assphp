import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'material-icons/iconfont/material-icons.css';
import Cart from './Cart/Cart';
import ProductDetailPage from './pages/product/Detail';
import { CartProvider } from 'react-use-cart';
ReactDOM.render(
  <React.StrictMode>

    <App />
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
