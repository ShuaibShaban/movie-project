import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', username, password);
    // Here you can add your logic for signing in the user
    // using the username and password values
  };

  return (
    <div className="text-center login-body m-5 auto">
      <div className="login-form">
        <h2 className="title-sign">Sign in </h2>
        <form className="form" onSubmit={handleFormSubmit}>
          <p className="paragraph">
            <label className="labels">Username or email address</label>
            <br />
            <input
              type="text"
              name="first_name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </p>
          <p className="paragraph">
            <label ClassName="labels">Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <p className="paragraph">
            <button id="sub_btn" type="submit">
              Login
            </button>
          </p>
        </form>
        <footer>
          <p className="paragraph">
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}