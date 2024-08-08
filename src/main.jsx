import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1042037290573-3das8rfaq0asu6h3rmjt0fkkmqrtpu34.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    
  </React.StrictMode>,
)
