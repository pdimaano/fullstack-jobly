import React, { useState } from "react";
import Alert from './Alert';
// import "./LoginForm.css";

/**
 * Renders form
 *
 * Props: onSubmission - function
 *
 * State: formData - string
 *        error - Array
 *
 * Render:
 *   App -> LoginForm
 */

function LoginForm({ onSubmission }) { //update function name to userLogin
  console.debug("LoginForm");

  const defaultFormData = {
    username: "testOne",
    password: "testword"
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState([])

  console.log('formData: ', formData, 'error: ', errors);

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
      setErrors(error);
    }
  }

  return (
    <form className="LoginForm container" onSubmit={onSubmit}>
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
      {
        errors.length !== 0 ?
        errors.map((e, idx) => (
          <Alert key={idx} error={e} />
        )) :
        null
      }
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default LoginForm;
