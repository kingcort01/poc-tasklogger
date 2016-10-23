import React, {Component} from 'react';
import DateBar from './date_bar';
import TaskDetails from './task_details';

class TaskList extends Component{

    constructor(props){
        super(props)

        this.state = {
            listArray : [
                {
                    id : 99,
                    date : 'Aug 29, 2016',
                    details : [
                        'Task 1',
                        'Task 2',
                        'Task 3'
                    ]
                },
                {
                    id : 100,
                    date : 'Sept 15, 2016',
                    details : [
                        'Task 4',
                        'Task 5',
                        'Task 6',
                        'Task 7'
                    ]
                },
            ]
        };

        this.renderTask = this.renderTask.bind(this);

    }

    renderTask(task, i){
        console.log("wahti is this : ", task, " == ", i)
        return(
            <div key={i}>
                <DateBar createDate={task.date}/>
                <TaskDetails details={task.details}/>
            </div>
        );
    }

    render(){
        return(
            <div className="row">
                {
                    this.state.listArray.map(this.renderTask)
                }
            </div>
        )
    }

}

export default TaskList;