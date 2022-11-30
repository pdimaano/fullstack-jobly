import React, { useState } from 'react';

/**
 * Renders form
 *
 * Props: onSearch - function
 *
 * State: formData - string
 *
 * Render:
 *   (CompanyList, JobList) -> SearchForm
 */

function SearchForm({onSearch}) {
  console.debug('SearchForm');

  const [formData, setFormData] = useState('');

  /**
   * Updates form input
   *
   * Input: event object
   */
  function onChange(e) {
    e.preventDefault();
    setFormData(e.target.value);
  }

  /**
   *  Calls passed in parent function and resets formData
   *
   *  Input: event object
   */
  function onSubmit(e) {
    e.preventDefault();
    onSearch(formData);
    setFormData('');
  }


  return (
    <div className="SearchForm">
      <form className="form-inline" onSubmit={onSubmit}>
        <div className="SearchForm-input form-group">
          <input
            className="form-inline-plaintext"
            onChange={onChange}
            placeholder="Enter a search term..."
            value={formData}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )

}

export default SearchForm;