import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

// Testing application comment

Sentry.init({dsn: "https://0632561d7d784893878cd1234ca9b1e8@o395744.ingest.sentry.io/5248132"});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();