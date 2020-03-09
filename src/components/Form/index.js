import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ handleSubmit, label, handleChange }) => {
  const getValueAndSubmit = (event) => {
    event.preventDefault();

    
    handleSubmit();
    // eslint-disable-next-line max-len
    
  };

  const getNewValue = (event) => {
    
    handleChange(event.target.value);
  };

  return (
    <form id="form" onSubmit={getValueAndSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="form-input"
        value={label}
        onChange={getNewValue}
      />
    </form>
  );
};


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;