import React from 'react' // syntax sugar para [ const React = require('react') ]
import ReactDOM from 'react-dom'

import App from './App'

// JSX
ReactDOM.render(
  <React.StrictMode> {/* elemento pai que envolve o App */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') // = document.querySelector('#root')
)
