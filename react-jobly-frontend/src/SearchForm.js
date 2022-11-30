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

  const [formData, setFormData] = useState('')

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
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="Enter a search term..."
          value={formData}
        />
        <button>Submit</button>
      </form>
    </div>
  )

}

export default SearchForm;