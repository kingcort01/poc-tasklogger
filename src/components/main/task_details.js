import React, { Component } from 'react';
import TaskItem from './task_item';

class TaskDetails extends Component{

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

export default TaskDetails;