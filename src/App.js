// App.js
// App.js
// App.js
import React from 'react';
import './App.css';

function LoginPage() {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="login-email">Email:</label>
          <input type="email" id="login-email" name="Email" required />
        </div>
        <div className="input-group">
          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" name="Password" required />
        </div>
        <button className="btn" type="Submit">Login</button>
      </form>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="signup-form">
      <h2>Sign up</h2>
      <form>
        <div className="input-group">
          <label htmlFor="signup-name">Name:</label>
          <input type="text" id="signup-name" name="Full Name" required />
        </div>
        <div className="input-group">
          <label htmlFor="signup-email">Email:</label>
          <input type="email" id="signup-email" name="Email" required />
        </div>
        <div className="input-group">
          <label htmlFor="signup-password">Password:</label>
          <input type="password" id="signup-password" name="Password" required />
        </div>
        <button className="btn" type="submit">Sign up</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="heading">Welcome to our first Web Development project!</h1>
      <div className="login-signup-container">
        <LoginPage />
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
