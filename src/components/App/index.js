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
      tasks,
      newTaskLabel: '', // Le but ici est d'initialiser l'input pour qu'il se vide après le submit
    };

    // On bind la méthode pour pouvoir utiliser this dedans
    this._handleAddTask = this.handleAddTask.bind(this);
    this._handleCheck = this.handleCheck.bind(this);
    this.changeTaskFav = this.changeTaskFav.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange = (newValue) => {
    // on fournit à setState un objet contenant la nouvelle valeur
    this.setState({
      newTaskLabel: newValue,
    });
  }

  generateId = () => {
    // je déstructure mon state pour avoir une variable tasks
    const { tasks } = this.state;

    // on va prendre le maximum des id existants et ajouter 1

    // on récupère d'abord tous les ids de tasks
    // map crée un nouveau tableau
    const ids = tasks.map((task) => task.id);

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/max
    // Math.max retourne le maximum de ses arguments
    // on déverse tous les élements du tableau ids en arguments de Math.max
    // Math.max(ids[0], ids[1] etc) => il faudrait savoir combien on a d'éléments
    const maxId = Math.max(...ids);

    return (maxId + 1) || 1;
  }

  // eslint-disable-next-line react/sort-comp
  handleAddTask() {
    // On ne va pas récupérer la valeur de l'input ici car cela ne respecterai pas les responsabilités de chaque composant
    // App ne sert qu'à récuperer des données
    const newTask = {
      id: this.generateId(),
      label: this.state.newTaskLabel,
      done: false,
      fav: false,
    };

    // On crée un nouveau tableau et on va le passer à setState pour modifier le state
    const newTasks = [...this.state.tasks];
    newTasks.push(newTask);
    this.setState({
      tasks: newTasks,
    });

    // la tâche a été ajoutée à la liste, on vide le champ input du Form
    // puisque Form est un composant contrôlé, on agit sur le state, et la
    // modification sera répercutée automatiquement avec les props
    this.setState({
      newTaskLabel: '',
    });
  }

  handleCheck = (id) => {
    // On va devoir travailler avec des copies
    // - nouveau tableau de taches 
    // - pour chaque entrée on va vérifier si la tâche correspond à l'ID
    // - Si l'ID correspond, on DOIT créer un nouvel objet
    // - on va devoir modifier l'une des tâches du tableau
    const{ tasks } = this.state;
    const newTasks = tasks.map((task)=>{
      if (task.id === id) {
        // il s'agit de la tâche qui nous interesse
        // on reconstruit l'objet
        return {
          ...task,
         // id: task.id,
         // label: task.label,
         // done: !task.done,
         done: !task.done, // on écrase la valeur de Done 
        };
      }else {
        // l'id ne correspond pas, je garde l'objet intact
        return task;
      }
    });

    // modif du state 
    this.setState({
      tasks : newTasks
    });
  }

  // Pour le statut fav d'une tâche

  changeTaskFav(id) {
    // recup des tâches du state
    const { tasks } = this.state; 
    // revient à const tasks = this.state.tasks; 

    // Créer une copie du tableau de tâches en modifiant la tâche voulue
    const newTasks = tasks.map((task)=>{
      // La tâche possède l'ID recu ? 
      if (task.id === id) {
        //traitement
        return {
          ...task, // on déverse tout ce que contien l'objet task
          fav: !task.fav,
        }
      }else{
        return task;
      }
    }); 

    //Modification du state
    this.setState({
      tasks: newTasks,
    });
  }

  // Pour la suppression d'une tâche
  deleteTask(id) {
    // récup les tâches du state
    const { tasks } = this.state;
    // filter sur : je garde les tâches dont l'id est différent de celui reçu 
    const newTasks = tasks.filter((task)=> {
      return task.id !== id;
    });

    //Modif du state
    this.setState({
      tasks: newTasks,
    });
  }
  //focntion : selector : retourner la liste triée

  getFilteredTasks(tasks) {
    
    return [
      // les tâches non effectuées favories
      ...tasks.filter((task)=> !task.done && task.fav),
    // les tâches non effectuées non favorites
    ...tasks.filter((task)=> !task.done && !task.fav),
    // les tâches effectuées
    ...tasks.filter((task)=> task.done),
    ];
  }


  render() {
    const nbTasksNotDone = this.state.tasks.filter((task) => !task.done).length;

    // Filtre des tâches : via un selecteur
    const filteredTasks = this.getFilteredTasks(this.state.tasks);
    return (
      <div id="app">
        <Form
          handleSubmit={this._handleAddTask}
          label={this.state.newTaskLabel}
          handleChange={this.handleChange}
        />
        <Main 
        nbTasks={nbTasksNotDone} 
        tasks={filteredTasks} 
        /*handleCheck={this.handleCheck}*/
        // faire un package des méthodes
        actions={{
          handleCheck: this.handleCheck, 
          changeTaskFav: this.changeTaskFav,
          deleteTask: this.deleteTask,
        }}
         />
      </div>
    );
  }
}

// == Export
export default App;
