import React from 'react';

import PropTypes from 'prop-types';

import './main.scss';
import Task from 'src/components/Main/Task';

const Main = ({ nbTasks, tasks, actions }) =>
  (
     <main>
      <h2> {nbTasks} tâches en cours </h2>
      <ul className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            {...actions}
          />
        ))}
      </ul>
    </main>
  );


Main.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  nbTasks: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Main;
