import React, { PropTypes } from 'react'

const Navbar = ( { connectedUsers } ) => (
  <nav className="navbar">
    <a href="/" className="navbar-brand">
      Chatty
    </a>
    <span className="navbar-users">
      { connectedUsers } users online
    </span>
  </nav>
)

Navbar.propTypes = {
  connectedUsers: PropTypes.number.isRequired
}

export default Navbar