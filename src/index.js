// Load up the application styles
import "../styles/application.css";


// Render the top-level React component
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';


render(
  <App />,
  document.getElementById('root')
);
