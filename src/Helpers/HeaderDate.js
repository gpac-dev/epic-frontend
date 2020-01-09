import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment'

import wolfears from '../assets/SVG/gpac-wolfears.svg';

class HeaderDate extends Component {
  constructor(props){
    super(props)
    this.state = {
      date : new Date()
    }
  }

  componentDidMount(){
    this.interval = setInterval(this.getCurrentDate, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  getCurrentDate = () => {
    this.setState({
      date : new Date()
    })
  } 

  render() {
    return (
      <Fragment>
          <div className="h-right">
            <div className="hr-clock">
              <div className="hrc-date">
                <p className="hrcd-day">
                  <Moment tz={moment.tz.guess()} format="ddd">{this.state.date}</Moment>
                </p>
                <p className="hrcd-month">
                  <Moment tz={moment.tz.guess()} format="MMM Do">{this.state.date}</Moment>
                </p>
              </div>
              <div className="hrc-time">
                <p className="hrct-hours">
                  <Moment tz={moment.tz.guess()} format="h">{this.state.date}</Moment>:
                </p>
                <p className="hrct-minutes">
                  <Moment tz={moment.tz.guess()} format="mm">{this.state.date}</Moment>
                </p>
              </div>
            </div>
            <div className="hr-logo">
              <Link to="/dashboard">
                <img src={wolfears} alt="" />
              </Link>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default HeaderDate;