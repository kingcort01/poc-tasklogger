import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/main/task_list';

class App extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <TaskList/>
            </div>
        )

    }

}

ReactDOM.render(<App />, document.querySelector('.container'))