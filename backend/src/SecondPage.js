import React, { useState } from 'react';

const SecondPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);
    setEmailError(!emailPattern.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordError(value.length < 6);
  };

  return (
    <div className="container  w-1/2 h-1/2 p-4 flex items-center justify-center">
      <div className="form-card p-6 bg-gray-300 rounded-lg shadow-md w-full max-w-md">
        <div className="profile-icon flex justify-center mb-6">
          <i className="profile-icon-img text-4xl text-gray-600">👤</i>
        </div>
        <input
          type="text"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          className={`input-field block w-full p-3 mt-3 border ${
            emailError ? 'border-red-500' : email ? 'border-green-500' : 'border-gray-300'
          } rounded-md`}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          className={`input-field block w-full p-3 mt-3 border ${
            passwordError ? 'border-red-500' : password ? 'border-green-500' : 'border-gray-300'
          } rounded-md`}
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default SecondPage;
