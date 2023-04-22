import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Tic-Tac-Toe</h1>
    <App />
    <div className='footer'>Made with ❤ by <a href='https://github.com/SinhaAmrit' target='_blank' rel='noopener noreferrer'>Amrit Sinha</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href='https://tic-tac-toe-fun.vercel.app/' target='_blank' rel='noopener noreferrer'>Try Two Player Mode 😉</a> </div>
  </React.StrictMode>
);