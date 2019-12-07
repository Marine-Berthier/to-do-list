import React from 'react'; 

import PropTypes from 'prop-types';

import './main.scss';

const Main = ({ tasks }) => {
    return(
    <main>
        <h2> Tâches en cours </h2>
        <ul className = 'list'>
            {tasks.map(task => (
            <li className = 'list-item' key={task.id}> <input type='checkbox'></input> 
            <p> { task.label }</p></li>
            ))}
        </ul>
    </main>
);}

Main.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label:PropTypes.string.isRequired,
            done:PropTypes.bool.isRequired,
        }).isRequired).isRequired,
}

export default Main;
