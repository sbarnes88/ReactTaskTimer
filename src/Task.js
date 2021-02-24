import React from 'react'

class Task extends React.Component {
    timerId = -1;

    constructor(props) {
        super(props);
        this.state = {time:0, taskName:'',priority:0,completed:false, uuid:this.uuidv4()}
        this.handleTaskNameChange = this.handleTaskNameChange.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);

    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.stopTimer();
    }

    updateTime() {
        this.setState({time: this.state.time+1});
    }

    startTimer() {
        if(this.timerId != -1)
            this.stopTimer();
        this.timerId = setInterval(() => this.updateTime(), 1000);
    }

    stopTimer() {
        if(this.timerId === -1)
            return;
        clearInterval(this.timerId);
        this.timerId = -1;
    }

    resetTimer() {
        this.stopTimer();
        this.setState({time:0});
    }

    handleTaskNameChange(event) {
        this.setState({taskName: event.target.value});
    }

    handlePriorityChange(event) {
        this.setState({priority: event.target.value});
    }

    handleCompletedChange(event) {
        console.log(event);
        if(event.target.value) {
            this.setState({completed:true});
            this.stopTimer();
        }else {
            this.setState({completed:false});
        }
    }

    render() {
        return(
                    <tr>
                        <td>
                    <input type="text" value={this.state.taskName} onChange={this.handleTaskNameChange} />
                    </td>
                    <td><input type="number" value={this.state.priority} onChange={this.handlePriorityChange} min="1" max="10"/></td>
                    <td>
                    <div class="checkbox-example">
                    <input type="checkbox" id={this.state.uuid} value={this.state.completed} onChange={this.handleCompletedChange}/>
        <label for={this.state.uuid}></label>
      </div>
                        </td>
                    <td>
                        <code>{this.getFormattedTime()}</code>
                    </td>
                    <td><button onClick={this.startTimer}>Start</button></td>
                    <td><button onClick={this.stopTimer}>Stop</button></td>
                    <td><button onClick={this.resetTimer}>Reset</button></td>
                    <td></td>
                   </tr>
        );
    }

    getFormattedTime() {
        var hours = Math.floor(this.state.time/60/60);
        var minutes = Math.floor(this.state.time/60) - hours*60;
        var seconds = this.state.time - (hours*60*60) - (minutes*60);
        var appendMinutesZero = false;
        var appendSecondsZero = false;

        if(minutes < 10)
            appendMinutesZero = true;
        if(seconds < 10)
            appendSecondsZero = true;
        
        return `${hours}:${(appendMinutesZero ? '0' : '')+minutes}:${(appendSecondsZero ? '0' : '')+seconds}`;
    }
}

export default Task;