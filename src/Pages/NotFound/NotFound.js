import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button';

import './NotFound.css';

class NotFound extends Component {
  handleGoBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <Fragment>
        <h1>Not Found Page</h1>
        <Button onClick={this.handleGoBack} variant="contained">Go Back</Button>
      </Fragment>
    );
  }
}

export default withRouter(NotFound);