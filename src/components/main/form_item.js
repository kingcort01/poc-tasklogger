import React, { Component } from 'react';

class FormItem extends Component{

    constructor(props){
        super(props);


    }

    render(){

        return(
            <div>
                <textarea ref="taskValue"></textarea>

            </div>
        )

    }

}

export default FormItem;