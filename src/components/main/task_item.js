import React, { Component } from 'react';
import FormItem from './form_item';

class TaskItem extends Component{

    constructor(props){
        super(props);

        this.state = { editing : false };
        this.editItemTask = this.editItemTask.bind(this);
        this.deleteItemTask = this.deleteItemTask.bind(this);
        this.cancelItemTask = this.cancelItemTask.bind(this)
    }

    editItemTask(e){
        if(this.state.editing){
            let taskValue = this.refs.taskValue.value;
            this.setState({ editing : false});
            this.props.updateTaskItem(taskValue, this.props.index);
        }else{
            this.setState({ editing : true });
        }
    }

    deleteItemTask(e){
        this.props.deleteTaskItem(this.props.index)
    }

    cancelItemTask(e){
        this.setState({ editing : false})
    }

    renderNormal(){
        return(
            <div>
                <div className="taskItemText">{this.props.children}</div>
                <button onClick={this.editItemTask} className="btn btn-warning">Edit</button>
                <button onClick={this.deleteItemTask} className="btn btn-danger">Delete</button>
            </div>
        )
    }

    renderForm(){
        return(
            <div>
                <textarea ref="taskValue" defaultValue={this.props.children}></textarea>
                <button onClick={this.editItemTask} className="btn btn-success">Save</button>
                <button onClick={this.cancelItemTask} className="btn btn-default">Cancel</button>
            </div>
        )
    }

    render(){
        if(this.state.editing)
            return this.renderForm()
        else
            return this.renderNormal()
    }

}

export default TaskItem;