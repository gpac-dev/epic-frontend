import React, { Component, Fragment } from 'react';

import './Dashboard.css';

import Header from '../../Components/Layouts/Header';
import Menu from '../../Components/Layouts/Menu';
import Footer from '../../Components/Layouts/Footer';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-cont">
          {/* Header starts */}
            <Header />
          {/* Header end */}
          {/* Menu starts */}
            <Menu />
          {/* Menu ends */}
          {/* Content starts */}
          
          {/* Content ends */}
          {/* Footer starts */}
            <Footer />
          {/* Footer ends */}
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;