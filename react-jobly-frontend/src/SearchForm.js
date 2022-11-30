import React, { useState } from 'react';

function SearchForm({onSearch}) {
  console.debug('SearchForm');

  const [formData, setFormData] = useState('')

  function onChange(e) {
    e.preventDefault();
    setFormData(e.target.value);
  }

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