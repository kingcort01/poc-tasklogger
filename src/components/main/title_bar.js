import React, { Component } from 'react';

class TitleBar extends Component{

    constructor(props){
        super(props);

        this.state = { date : this.props.createDate };

    }

    render(){

        return(
            <div>
                {
                    this.state.date
                }
            </div>
        )

    }

}

export default TitleBar;