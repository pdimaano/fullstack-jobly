import React from 'react';

function Alert({error}) {
  console.debug('Alert');

  return (
    <div className="Alert alert alert-danger" role="alert">
      {error}
    </div>
  )
}

export default Alert;