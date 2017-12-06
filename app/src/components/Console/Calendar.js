import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
  render() {
    const year  = this.props.Terminal.calendar.year;
    const month = this.props.Terminal.calendar.month;
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const offset = new Date(year, month - 1, 1).getDay();
    let date = 1;
    let firstDateDisplayed = false;
    const lastDate = new Date(year, month, 0).getDate();
    let weeks = [];
    let week = [];
    for(let i = 1; i <= lastDate; i++) {
      if (i == 1) {
        for (let j = 0; j < offset; j++) {
          week.push("");
        }
      }
      week.push(i);
      if (week.length == 7) {
        weeks.push(week);
        week = [];
      }
      if (i == lastDate && week.length > 0) {
        let weeklength = week.length;
        for(let k = 0; k < 7 - weeklength; k++) {
          week.push("");
        }
        weeks.push(week);
      }
    }
    console.log(this.props.Terminal);

    return (
      <div className="calendar">
        <div className="calendar__month">{months[month - 1]} {year}</div>
        <div className="">
          <div className="calendar__days">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div>
            <div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          {weeks.map(week => {
            return <div className="calendar__week">
              {week.map(date => {
                if (year == this.props.Terminal.today.year && month == this.props.Terminal.today.month && date == this.props.Terminal.today.date) {
                  return <div><span>{date}</span></div>;
                } else {
                  return <div>{date}</div>;
                }
              })}
            </div>
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Calendar);
