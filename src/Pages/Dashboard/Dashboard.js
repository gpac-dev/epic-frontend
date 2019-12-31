import React, { Component } from 'react';

import './Dashboard.css';

import Header from '../../Components/Dashboard/Header';
import Menu from '../../Components/Dashboard/Menu';
import Footer from '../../Components/Dashboard/Footer';
import Content from '../../Components/Dashboard/Content';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-cont">
          {/* Header starts */}
          <Header />
          {/* Header end */}
          {/* Menu starts */}
          <Menu />
          {/* Menu ends */}
          {/* Content starts */}
          <Content />
          {/* Content ends */}
          {/* Footer starts */}
          <Footer />
          {/* Footer ends */}
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;