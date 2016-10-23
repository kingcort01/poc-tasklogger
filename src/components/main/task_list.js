import React, {Component} from 'react';
import DateBar from './date_bar';
import TaskDetails from './task_details';

class TaskList extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row">
                <DateBar/>
                <TaskDetails/>
            </div>
        )
    }

}

export default TaskList;