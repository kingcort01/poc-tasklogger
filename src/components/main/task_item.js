import React, { Component } from 'react';

class TaskItem extends Component{

    constructor(props){
        super(props);

        this.state = { editing : false };
    }

    editItemTask(){
        this.setState({ editing : true });
        console.log('edit')
    }

    deleteItemTask(){
        console.log('delete')
    }

    render(){

        return(
            <div className="taskItemContainer">
                <div className="taskItemText">{this.props.children}</div>
                <button onClick={this.editItemTask} className="btn btn-warning">Edit</button>
                <button onClick={this.deleteItemTask} className="btn btn-danger">Delete</button>
            </div>
        )

    }

}

export default TaskItem;