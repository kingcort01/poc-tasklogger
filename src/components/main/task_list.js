import React, {Component} from 'react';
import TitleBar from './title_bar';
import TaskDetails from './task_details';

class TaskList extends Component{

    constructor(props){
        super(props)

        this.state = {
            listArray : [
                {
                    date : 'Aug 29, 2016',
                    details : [
                        'Task 1',
                        'Task 2',
                        'Task 3'
                    ]
                },
                {
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

        this.addTaskList = this.addTaskList.bind(this);
        this.removeTaskList = this.removeTaskList.bind(this);
        this.renderTask = this.renderTask.bind(this);

    }

    addTaskList(){
        let listArray = this.state.listArray;
        listArray.push({
            date : 'Oct 25, 2016',
            details : []
        });
        this.setState({ listArray : listArray })
    }

    removeTaskList(index){
        console.log("remove this : ", index);
        let listArray = this.state.listArray;
        console.log('the list : ', listArray[index]);
        listArray.splice(index, 1);
        this.setState({ listArray : listArray })
    }

    renderTask(task, i){
        return(
            <div key={i} className="col-md-4 task-details">
                <button onClick={this.removeTaskList.bind(null, i)}>Remove Task Detail</button>
                <TitleBar createDate={task.date}/>
                <TaskDetails details={task.details}/>
            </div>
        );
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <button onClick={this.addTaskList}>Add New Task Details</button>
                </div>
                {
                    this.state.listArray.map(this.renderTask)
                }
            </div>
        )
    }

}

export default TaskList;