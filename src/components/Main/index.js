import React from 'react'; 

import './main.scss';

const Main = () => (
    <main>
        <h2> Tâches en cours </h2>
        <ul className = 'list'>
            <li className = 'list-item'> <input type='checkbox'></input> 
            <p> Tâche 1</p></li>
        </ul>
    </main>
);

export default Main;