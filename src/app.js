import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main.jsx'

window.onload = function () {
  ReactDOM.render(
    <Main/>,
    document.getElementById('app')
  );
}
