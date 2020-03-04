// Imports npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FaTrash, FaRegStar, FaStar} from 'react-icons/fa';

import './main.scss';


// quand on déstructure, l'ordre n'est pas important
const Task = ({ id, label, handleCheck, changeTaskFav, deleteTask, done, fav }) => {
  // je stocke dans une variable car utilisé à deux endroits
  // => si on renomme à un endroit on ne risque pas d'oublier
  // de renommer à l'autre endroit
  // on ajoute un préfixe pour éviter des id en doublon
  const taskId = `task-${id}`;

  // si la tâche est faite on ajoute la classe "task--done"
 // en utilisant la librairie classNames
  // yarn add classnames
  // documentation https://www.npmjs.com/package/classnames
  // pour chaque classe CSS on peut indiquer à partir d'une variable s'il faut
  // l'appliquer ou non
  
  const className = classNames('list-item', { 'list-item--done': done, 'task--fav': fav, });

  // En fonction de la valeur de fav, l'étoile change
  const Favorite = fav ? FaStar : FaRegStar; 
  

  return (
    <li className={className}>
      <label htmlFor={taskId}>
        <input type="checkbox" id={taskId} checked={done} onChange={() => handleCheck(id)} />
        {label}
      </label>
      <FaTrash className="task-trash" onClick={()=> deleteTask(id)} />
      <Favorite className="task-fav" onClick={()=> changeTaskFav(id)} />
    </li>
  );
};

// validation des props
// On attend en props 3 informations
Task.propTypes = {
  onChangeTaskDone: PropTypes.func.isRequired,
  onChangeTaskFav: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  fav: PropTypes.bool.isRequired,
};

// export
export default Task;