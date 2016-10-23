import React, {Component} from 'react';
import TaskDetails from './task_details';

class TaskList extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <TaskDetails/>
            </div>
        )

    }

}

export default TaskList;