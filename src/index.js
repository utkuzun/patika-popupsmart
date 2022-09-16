import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AppProvider from './context'
import Info from './components/Info'

import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Info />
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
)
