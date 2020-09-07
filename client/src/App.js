import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default class App extends Component {
    constructor(props) {
      super(props)
    const now = new Date();
    const events = [
      {
          id: 0,
          title: 'hello today',
          start: now,
          end: now,
      },
       {
          id: 1,
          title: 'hello today 2',
          start: new Date(2020,9,9),
          end: new Date(2020,9,10),
      },
    ]
    this.state = {
      events
    };
  }
  render() {
    return (
      <div>
                <div style={{ height: '500pt'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    )
  }
}
