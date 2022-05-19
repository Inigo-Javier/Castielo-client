import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowseRouter as Router } from 'react-router-dom'

// BOOTSTRAP STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProviderWrapper } from './context/auth.context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </Router>,
)


