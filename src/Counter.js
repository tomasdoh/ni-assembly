import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import convertTime from './convertTime'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.startDate = new Date('jan,9,2017,06:00:00')
    this.state = { time: 0 }
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: convertTime(Date.now() - this.startDate)
    });
  }

  render() {
    return (
      <div>
        <h1>How long has Northern Ireland been without a government?</h1>
        <h2><h1>{this.state.time}</h1></h2>
        <h4>The Northern Ireland Assembly collapsed on {this.startDate.toLocaleDateString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}, following the resignation of the Deputy First Minister, Martin McGuinness.</h4>
      </div>
    );
  }
}

export default Counter


// function upTime(countTo) {
//   var now = new Date();
//   var countTo = new Date(countTo);
//   var difference = (now - countTo);
//
//   var days = Math.floor(difference / (60*60*1000*24) * 1);
//   var hours = Math.floor((difference % (60*60*1000*24)) / (60*60*1000) * 1);
//   var mins = Math.floor(((difference % (60*60*1000*24)) % (60*60*1000))/ (60*1000) * 1);
//   var secs = Math.floor((((difference % (60*60*1000*24)) % (60*60*1000)) % (60*1000)) / 1000 * 1);
//
//   document.getElementById('days').firstChild.nodeValue = days;
//   document.getElementById('hours').firstChild.nodeValue = hours;
//   document.getElementById('minutes').firstChild.nodeValue = mins;
//   document.getElementById('seconds').firstChild.nodeValue = secs;
//
//   clearTimeout(upTime.to);
//   upTime.to = setTimeout(function(){ upTime(countTo); },1000);
// }
//
// }
