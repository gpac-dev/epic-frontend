import React, { Fragment, Component } from 'react';

import profile_pic from '../../assets/profile_pic@2x.png';
import HeaderDate from '../../Helpers/HeaderDate';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="h-left">
            <div className="hl-menubtn"></div>
            <div className="hl-profilepic">
              <img src={profile_pic} alt="Profile" />
            </div>
            <div className="hl-welcome">
              <p>Welcome <strong>Jonathan</strong></p>
            </div>
          </div>
          <HeaderDate />
        </div>
      </Fragment>
    );
  }
}

export default Header;