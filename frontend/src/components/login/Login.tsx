import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login/">Login</Link>
    </div>
  );
}

export default Login;