import React from 'react';
import ReactDOM from 'react-dom';
import MountApp from './MountApp';
import "normalize.css";
import "./theme/fonts.css";
import "./theme/base.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MountApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
