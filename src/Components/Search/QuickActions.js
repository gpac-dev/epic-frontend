import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import newca from "../../assets/SVG/newca.svg"
import newco from "../../assets/SVG/newco.svg"
import newjo from "../../assets/SVG/newjo.svg"

class QuickActions extends Component {
  render (){
    return (
      <Fragment>
        <div className="quickactions">
          <Link to="/candidate" className="q-btn new-ca">
            <img src={newca} alt="" width="35" />
            <p>Create New Candidate +</p>
          </Link>
          <Link to="/company" className="q-btn new-co">
            <img src={newco} alt="" width="35" />
            <p>Create New Company +</p>
          </Link>
          <Link to="/job-order" className="q-btn new-jo">
            <img src={newjo} alt="" width="35" />
            <p>Create New Job Order +</p>
          </Link>
        </div>
      </Fragment>
    );
  } 
}

export default QuickActions;