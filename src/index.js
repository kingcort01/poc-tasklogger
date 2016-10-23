import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TaskItem from './components/task_item'

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            taskArray : [
                    'task 101 -lkdsafjdsaf',
                    'zzzzzzzzzzzzzzzz',
                    'task 101 -lkdsafjdsaf'
                ]
        };

    }

    eachTask(task, i){
        return (
            <TaskItem key={i} index={i}>
                {task}
            </TaskItem>
        );
    }

    render() {

        return (
            <div>
                {
                    this.state.taskArray.map(this.eachTask)
                }
            </div>
        );

    }

}

ReactDOM.render(<App />, document.querySelector('.container'))