import React, { Component } from 'react';

class DateBar extends Component{

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

export default DateBar;