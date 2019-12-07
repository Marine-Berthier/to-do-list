// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

import Form from 'src/components/Form';
import Main from 'src/components/Main';

// == Composant
const App = () => (
  <div id="app">
    <Form />
    <Main />
  </div>
);

// == Export
export default App;
