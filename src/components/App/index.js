// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

import Form from 'src/components/Form';
import Main from 'src/components/Main';


// Data
import tasks from 'src/data/tasks';

// == Composant
class App extends React.Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      tasks,
      newTaskLabel: '', 
    };

    
    this._handleAddTask = this.handleAddTask.bind(this);
    this._handleCheck = this.handleCheck.bind(this);
    this.changeTaskFav = this.changeTaskFav.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange = (newValue) => {
    
    this.setState({
      newTaskLabel: newValue,
    });
  }

  generateId = () => {
  
    const { tasks } = this.state;

    
    const ids = tasks.map((task) => task.id);

  
    const maxId = Math.max(...ids);

    return (maxId + 1) || 1;
  }

  // eslint-disable-next-line react/sort-comp
  handleAddTask() {
    
    const newTask = {
      id: this.generateId(),
      label: this.state.newTaskLabel,
      done: false,
      fav: false,
    };

    
    const newTasks = [...this.state.tasks];
    newTasks.push(newTask);
    this.setState({
      tasks: newTasks,
    });

    
    this.setState({
      newTaskLabel: '',
    });
  }

  handleCheck = (id) => {
    
    const{ tasks } = this.state;
    const newTasks = tasks.map((task)=>{
      if (task.id === id) {
        
        return {
          ...task,
         
         done: !task.done, 
        };
      }else {
        
        return task;
      }
    });

    
    this.setState({
      tasks : newTasks
    });
  }

  

  changeTaskFav(id) {
    
    const { tasks } = this.state; 
    

    const newTasks = tasks.map((task)=>{
       
      if (task.id === id) {
       
        return {
          ...task, 
          fav: !task.fav,
        }
      }else{
        return task;
      }
    }); 

    
    this.setState({
      tasks: newTasks,
    });
  }


  deleteTask(id) {
    
    const { tasks } = this.state;
    
    const newTasks = tasks.filter((task)=> {
      return task.id !== id;
    });

   
    this.setState({
      tasks: newTasks,
    });
  }
 

  getFilteredTasks(tasks) {
    
    return [
      
      ...tasks.filter((task)=> !task.done && task.fav),
    
    ...tasks.filter((task)=> !task.done && !task.fav),
    
    ...tasks.filter((task)=> task.done),
    ];
  }


  render() {
    const nbTasksNotDone = this.state.tasks.filter((task) => !task.done).length;

    
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
