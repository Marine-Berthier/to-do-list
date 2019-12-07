// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

import Form from 'src/components/Form';
import Main from 'src/components/Main';

// On importe les données
import tasks from 'src/data/tasks';

// == Composant
const App = () => (
  <div id="app">
    <Form />
    <Main tasks={tasks} />
  </div>
);

// == Export
export default App;


