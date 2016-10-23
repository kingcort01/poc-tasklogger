import React, { Component } from 'react';

class FormItem extends Component{

    constructor(props){
        super(props);

        this.AddItem = this.AddItem.bind(this);
    }

    AddItem(){
        this.props.addTaskItem(this.refs.taskValue.value);
        this.refs.taskValue.value = "";
    }

    render(){

        return(
            <div>
                <textarea ref="taskValue"></textarea>
                <button onClick={this.AddItem} className="btn btn-primary">Save</button>
            </div>
        )

    }

}

export default FormItem;