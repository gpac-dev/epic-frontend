import React, { Component, Fragment } from 'react';

class InternetConnection extends Component {
  constructor(){
    super()
    this.state = {
      isDisconnected: false
    }
  }

  componentDidMount(){
    this.handleConnectionChange()
    window.addEventListener('online', this.handleConnectionChange)
    window.addEventListener('offline', this.handleConnectionChange)
  }

  componentWillUnmount(){
    window.removeEventListener('online', this.handleConnectionChange)
    window.removeEventListener('offline', this.handleConnectionChange)
  }

  handleConnectionChange = () => {
    const condition = navigator.onLine ? 'online' : 'offline'

    if(condition === 'online'){
      const ping = setInterval(() => {
        fetch('//google.com', { mode: 'no-cors'}).then(() => {
          this.setState({ isDisconnected: false }, () => {
            return clearInterval(ping)
          })
        }).catch(() => this.setState({ isDisconnected: true}))
      }, 1000)
      return
    }

    this.setState({ isDisconnected : true })
  }

  render () {
    const { isDisconnected } = this.state;
    return (
      <Fragment>
        { isDisconnected && (<div className="internet-error"><p>Internet Connection Lost</p></div>) }
      </Fragment>
    );
  }
}

export default InternetConnection;