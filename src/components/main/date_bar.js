import React, { Component } from 'react';

class DateBar extends Component{

    constructor(props){
        super(props);
    }

    getCurrentDate(){
        console.log('asdflksdf');
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        return mm+'/'+dd+'/'+yyyy;
    }

    render(){

        return(
            <div>
                THIS IS THE DATE BAR
            </div>
        )

    }

}

export default DateBar;