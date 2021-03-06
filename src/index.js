import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './stats/reportWebVitals';

// context
import { SiteContextProvider } from './SiteContext';

// system styles
import './index.css';
import './system-class.css';

ReactDOM.render(
  <React.StrictMode>
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
