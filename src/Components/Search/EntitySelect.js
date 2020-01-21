import React, { Fragment, Component } from 'react';

class EntitySelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      action : 1
    }
  }

  setQuickActions = (action) => {
    console.log(action);
    this.setState({action : action})
  }

  searchChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    const action = this.state.action;

    console.log(action, name, value)
  }

  render (){
    return (
      <Fragment>
        <div className="entity-select">
          <div className="candidates-btn es-active es-option" onClick={() => this.setQuickActions(1)}>Candidates</div>
          <div className="joborders-btn es-option" onClick={() => this.setQuickActions(2)}>Job Orders</div>
          <div className="companies-btn es-option" onClick={() => this.setQuickActions(3)}>Companies</div>
          <div className="entity-selector-rect"></div>
        </div>
        <div className="entity-select-list">
          <div className="esl-btn">
            Candidates
            <div className="w-arrow"></div>
          </div>
          <div className="esl-list">
            <div className="candidates-btn es-option" onClick={() => this.setQuickActions(1)}>Candidates</div>
            <div className="joborders-btn es-option" onClick={() => this.setQuickActions(2)}>Job Orders</div>
            <div className="companies-btn es-option" onClick={() => this.setQuickActions(3)}>Companies</div>
          </div>
        </div>

        <div className="search-bar">
          <input className="search-input" type="text" name="search" onChange={this.searchChange} placeholder="Search" />
          <span className="search-bar-btn"></span>
          <button className="search-btn" onClick={this.searchFilter}>Search</button>
        </div>
      </Fragment>
    );
  } 
}

export default EntitySelect;