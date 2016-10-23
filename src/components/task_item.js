import React, { Component } from 'react'

class TaskItem extends Component{

    constructor(props){
        super(props);

        this.state = { editing : false };
    }

    render(){

        return(
            <div>{this.props.children}</div>
        )

    }

}

export default TaskItem;