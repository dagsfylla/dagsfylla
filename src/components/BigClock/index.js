import React, { Component } from 'react';

import { StyledClock } from './style';
import differenceInSeconds from 'date-fns/difference_in_seconds'


const second = 1,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

class BigClock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    getSeconds = () => {
        let { date } = this.props;
        console.log(date)
        var results = differenceInSeconds(new Date(date[0], date[1], date[2], date[3], date[4]), new Date());
        console.log(results);
        return results
    }

    render() { 

        let distance = this.getSeconds();

        return ( 
            <StyledClock>
                <ul>
                    <li><span id="days">{Math.floor(distance / (day))}</span>dager</li>
                    <li><span id="hours">{Math.floor(distance % (day) / (hour))}</span>timer</li>
                    <li><span id="minutes">{Math.floor(distance % (hour) / (minute))}</span>minutter</li>
                    <li><span id="seconds">{Math.floor(distance % (minute) / (second))}</span>sekunder</li>
                </ul>
            </StyledClock>
         );
    }
}
 
export default BigClock;