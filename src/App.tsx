import React, { useState } from "react";
import ShinyButton from "./components/ShinyButton";

function SignUpForm() {
  // State to store error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Validation function
  const validateForm = (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Initialize a new errors object
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    // Name validation: Ensure name is not empty
    if (!name) {
      newErrors.name = "Name is required.";
    }

    // Email validation: Ensure email is in valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Password validation: Ensure password is at least 6 characters long
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    // Update error state
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      e.target.submit();
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form id="signup-form" onSubmit={validateForm}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <span className="error" id="name-error">
            {errors.name}
          </span>
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <span className="error" id="email-error">
            {errors.email}
          </span>
        </div>

        {/* Password Field */}
        <div class="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <span className="error" id="password-error">
            {errors.password}
          </span>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <ShinyButton>Sign Up</ShinyButton>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
