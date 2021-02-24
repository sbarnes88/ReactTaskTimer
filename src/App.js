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
    var newTaskList = this.state.tasks;
    var task = new Task();
    newTaskList.push(task);
    this.setState({tasks: newTaskList})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addTask}>Add Task</button>
        <div className="App-task-overflow">
          <table className="App-table">
            <thead>
              <tr>
                <td>Task Name</td>
                <td>Priority</td>
                <td>Completed</td>
                <td>Time</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                </td>
              </tr>
            </thead>
            <tbody className="App-task-overflow">
          {this.state.tasks.map((t) => <Task key={t}></Task>)}
          </tbody>
          </table>
          </div>
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
