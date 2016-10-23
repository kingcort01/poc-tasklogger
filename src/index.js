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
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Task Logger BETA 0.0.1
                        </h1>
                    </div>
                </div>
                <TaskList/>
            </div>
        )

    }

}

ReactDOM.render(<App />, document.querySelector('.container'))