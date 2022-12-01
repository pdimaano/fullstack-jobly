import React, { useState } from "react";
// import "./SignupForm.css";

/**
 * Renders form
 *
 * Props: onSubmission - function
 *
 * State: formData - string
 *
 * Render:
 *   App -> SignupForm
 */

function SignupForm({ onSubmission }) {
  console.debug("SignupForm");

  const defaultFormData = {
    username: "testOne",
    password: "testword",
    firstName: "test",
    lastName: "One",
    email: "test@testing.com",
  };

  const [formData, setFormData] = useState(defaultFormData);

  /**
   * Updates form input
   *
   * Input: event object
   */
  function onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /**
   *  Calls passed in parent function and resets formData
   *
   *  Input: event object
   */
  async function onSubmit(e) {
    e.preventDefault();
    try {
      console.log("IN TRY")
      await onSubmission(formData);
      setFormData(defaultFormData);
    } catch (error) {
      console.log("ERROR!", error)
    }
  }

  return (
    <form className="SignupForm container" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          name="username"
          className="form-control"
          value={formData.username}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          className="form-control"
          type="password"
          value={formData.password}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          name="firstName"
          className="form-control"
          value={formData.firstName}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          name="lastName"
          className="form-control"
          value={formData.lastName}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          className="form-control"
          value={formData.email}
          onChange={onChange}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default SignupForm;
