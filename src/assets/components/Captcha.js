import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = ({ onVerify }) => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (onVerify) {
      onVerify(value);
    }   
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6LfsCfYpAAAAADRWPegcq47IYEq3VIaflyDdevKa"
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default Captcha;
