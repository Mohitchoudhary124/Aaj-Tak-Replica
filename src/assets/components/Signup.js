import React, { useState } from 'react';
import Captcha from './Captcha';

const Signup = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaVerified) {
      console.log("Form submitted");
    } else {
      alert("Please complete the CAPTCHA");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='back'>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>First name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
      />
    </div>
    <div className="mb-3">
      <label>Last name</label>
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    
    <p className="forgot-password text-right">
      Already registered <a href="/sign-in">sign in?</a>
    </p>

      <Captcha onVerify={handleCaptchaVerify}/>
      <div className="d-grid">
      <button type="submit" disabled={!captchaVerified} className="btn btn-primary">Sign Up</button>
      </div>
    </form>
  );
};

export default Signup;
