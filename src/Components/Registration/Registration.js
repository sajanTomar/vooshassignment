import React, { Component, useEffect, useState } from "react";
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    designation: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
        setFormData({
            email: storedEmail,
            password: storedPassword
        });
        setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password) {
      localStorage.setItem('email', formData.email);
      localStorage.setItem('password', formData.password);
      setIsLoggedIn(true);
      alert('You have successfully registered');
    } else {
      alert('You have successfully booked a demo!');
    }
  }

  if (isLoggedIn) {
    return <h1>Already logged in!</h1>
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>
        <div>
            Name
            <span className="compulsory-icon">*</span>
        </div>
        <input type="text" name="name" placeholder="Ex. John Doe" value={formData.name} onChange={handleChange} /> 
      </label>
       
      <label>
        <div>
            Email
            <span className="compulsory-icon">*</span>
        </div> 
        <input type="email" name="email" placeholder="Ex. mail@website.com" value={formData.email} onChange={handleChange} />
      </label>
      
      <label>
        <div>
            Company Name 
            <span className="compulsory-icon">*</span>
        </div>
        <input type="text" name="company_name" placeholder="Ex. XYZ PVT LTD" value={formData.company_name} onChange={handleChange} /> 
      </label>
      
      <label>
        <div>
            Your Title 
            <span className="compulsory-icon">*</span>
        </div>
        <input type="text" name="designation" placeholder="Ex. Operational Head" value={formData.designation} onChange={handleChange} /> 
      </label>
      
      <label>
        <div>
            Password
            <span className="compulsory-icon">*</span>
        </div>
        <input type="password" name="password" placeholder="Enter password to register" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Book Demo</button>
    </form>
  );
};

export default Registration;
