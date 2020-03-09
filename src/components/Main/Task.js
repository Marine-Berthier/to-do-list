// Imports npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FaTrash, FaRegStar, FaStar} from 'react-icons/fa';

import './main.scss';



const Task = ({ id, label, handleCheck, changeTaskFav, deleteTask, done, fav }) => {
 
  const taskId = `task-${id}`;

  
  const className = classNames('list-item', { 'list-item--done': done, 'task--fav': fav, });

  
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