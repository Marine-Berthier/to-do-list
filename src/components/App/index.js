// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

import Form from 'src/components/Form';
import Main from 'src/components/Main';

// On importe les données
import tasks from 'src/data/tasks';

// == Composant
class App extends React.Component {

  constructor(props) {
    // On appelle le constructor du parent React.Component
    super(props);
    // State : stocker l'état de l'application
    // Si le state change, le render() du composant est relancé
    this.state = {
      done: false,
    };
    console.log(this);
  }

render(){

  return(
  <div id="app">
    <Form />
    <Main tasks={tasks} />
  </div>
  );
  }
}

// == Export
export default App;


