import React from 'react'; 

import './main.scss';

const Main = () => (
    <main>
        <h2> Tâches en cours </h2>
        <ul className = 'list'>
            <li className = 'list-item'> Tâche 1 </li>
            <li className = 'list-item'> Tâche 2 </li>
        </ul>
    </main>
);

export default Main;