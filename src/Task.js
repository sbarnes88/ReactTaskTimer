import React from 'react'

class Task extends React.Component {
    timerId = -1;

    constructor(props) {
        super(props);
        this.state = {time:0, taskName:'',priority:0,completed:false}
        this.handleTaskNameChange = this.handleTaskNameChange.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

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

    render() {
        return(
                    <tr>
                        <td>
                    <input type="text" value={this.state.taskName} onChange={this.handleTaskNameChange} />
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