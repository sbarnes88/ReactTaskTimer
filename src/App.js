import logo from './logo.svg';
import './App.css';
import React from 'react';
import Task from './Task';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.state = {tasks: []};
  }

  addTask() {
    console.log(this.state.tasks);
    var newTaskList = this.state.tasks;
    var task = new Task();
    task['uuid'] = this.uuidv4();
    newTaskList.push(task);
    this.setState({tasks: newTaskList})
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.addTask}>Add Task</button>
        <div className="App-task-overflow">
          <table className="App-table">
            <thead>
              <tr>
                <td>Task Name</td>
                <td>Time</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                </td>
              </tr>
            </thead>
            <tbody className="App-task-overflow">
          {this.state.tasks.map((t) => <Task key={t['uuid']}></Task>)}
          </tbody>
          </table>
          </div>
        </header>
      </div>
    );
  }
}

/* function App() {
const tasks = [];
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <th>Name</th>
            <th>Time</th>
            <th></th>
            <th></th>
            <th></th>

          </thead>
          {tasks.map((task) => <Task></Task>)}
        </table>
        <button onClick={addTask}>Add Task</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
