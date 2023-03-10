import React from 'react';
import ReactDOM from 'react-dom/client';
// import Card from './Card';
// import CardList from './CardList';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
// import { robots } from './robots';
import './index.css';
import App from './containers/App';
// ReactDOM.render(<Card/>, document.getElementById('root'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();