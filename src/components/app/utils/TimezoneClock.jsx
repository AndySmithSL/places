import React from 'react';

class TimezoneClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            date: this.calcTime(props.offset),
            offset: props.offset,
            time: props.time
         };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount = () => clearInterval(this.timerId);
    
    tick = () => {

        let date = new Date();

        this.setState({ date: this.calcTime(this.state.offset) })
    };

    calcTime = offset => {
        // create Date object for current location
        var d = new Date();
    
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000*offset));
    
        // return time as a string
        //return nd.toLocaleString();
        return nd;
    }

    getMonth = monthNumber => {
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        return month[monthNumber];
    }

    getDayOfWeek = dayNumber => {
        var day = new Array();
        day[0] = "Sunday";
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Saturday";
        return day[dayNumber];
    }

    render() {

        var d = this.state.date;
        var datestring = this.getDayOfWeek(d.getDay()) + ", " + d.getDate() + " " + this.getMonth(d.getMonth()) + " " + d.getFullYear();
        
        return (
            <div>
                { this.state.time ? this.state.date.toLocaleTimeString() : datestring }
            </div>
        );
    }
}

export default TimezoneClock;
