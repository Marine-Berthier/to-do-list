import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ handleSubmit, label, handleChange }) => {
  const getValueAndSubmit = (event) => {
    event.preventDefault();

    // on récupère la valeur de l'input en lançant
    handleSubmit();
    // eslint-disable-next-line max-len
    // la valeur du label n'est plus nécessaire en argument, Form est un composant controlé et connait la valeur dans son state
  };

  const getNewValue = (event) => {
    // traite l'événement pour récupérer la nouvelle valeur de l'input
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

// valider les PropTypes
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // ce qu'il faut afficher dans l'input
  label: PropTypes.string.isRequired,
  // appelé quand la valeur de l'input change
  handleChange: PropTypes.func.isRequired,
};

export default Form;