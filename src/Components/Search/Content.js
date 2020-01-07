import React, { Fragment, Component } from 'react';

class Content extends Component {
  componentDidMount() {
  
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="content-new-search">
            <div className="cns-cell">
              <div className="title-quote"><h2>What are you looking for?</h2></div>
              {/* Use JQuery #SwitchEntitySelector */}
              <div className="entity-select">
                <div className="candidates-btn es-active es-option">Candidates</div>
                <div className="joborders-btn es-option">Job Orders</div>
                <div className="companies-btn es-option">Companies</div>
                <div className="entity-selector-rect"></div>
              </div>
              {/* Use JQuery #ListEntitySelector */}
              <div className="entity-select-list">
                <div className="esl-btn">
                  Candidates
                  <div className="w-arrow"></div>
                </div>
                <div className="esl-list">
                  <div className="candidates-btn es-option">Candidates</div>
                  <div className="joborders-btn es-option">Job Orders</div>
                  <div className="companies-btn es-option">Companies</div>
                </div>
              </div>
              {/* Entity Selector ends */}
              <div className="search-bar">
                <input className="search-input" type="text" placeholder="Search by Position" />
                <button className="search-bar-btn" onClick={this.search}></button>
                <div className="filters-box">
                  {/* Filters Box Candidates starts */}
                  <div className="fbx-candidates">
                    <div className="fbx-grid">
                      <input type="text" className="filters-field f-1-col" placeholder="Name" />
                      <input type="text" className="filters-field f-1-col" placeholder="Title" />
                      <div className="filters-field filters-select f-1-col">
                        Industry
                        <ul className="filters-select-list">
                          <li className="filters-select-option">Accounting</li>
                          <li className="filters-select-option">Agriculture</li>
                          <li className="filters-select-option">Architecture</li>
                          <li className="filters-select-option">Banking & Finance</li>
                          <li className="filters-select-option">Energy</li>
                          <li className="filters-select-option">Engineering</li>
                          <li className="filters-select-option">Accounting</li>
                          <li className="filters-select-option">Agriculture</li>
                          <li className="filters-select-option">Architecture</li>
                          <li className="filters-select-option">Banking & Finance</li>
                          <li className="filters-select-option">Energy</li>
                          <li className="filters-select-option">Engineering</li>
                        </ul>
                        <div className="arrow"></div>
                      </div>
                      <input type="text" className="filters-field f-1-col" placeholder="Location" />
                      <input type="text" className="filters-field f-1-col" placeholder="Zip" />
                      <input type="text" className="filters-field f-1-col" placeholder="Distance (km)" />
                      <div className="filters-range f-3-col">
                        <div className="filters-range-label">
                          <p>Experience Range (Years)</p>
                          <input type="text" className="filters-range-count" placeholder="max" /><input type="text" className="filters-range-count" placeholder="min" />
                        </div>
                        <div className="filters-range-bar">
                          <div className="filters-range-selection">
                            <div className="min-dot r-dot"><span>0</span></div>
                            <div className="max-dot r-dot"><span>23</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-range f-3-col">
                        <div className="filters-range-label">
                          <p>Salary Expectation (USD per Year)</p>
                          <input type="text" className="filters-range-count" placeholder="max" /><input type="text" className="filters-range-count" placeholder="min" />
                        </div>
                        <div className="filters-range-bar">
                          <div className="filters-range-selection">
                            <div className="min-dot r-dot"><span>0</span></div>
                            <div className="max-dot r-dot"><span>23</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-check-relo f-1-col">
                        <div className="filters-check-relo-label">Open to relocate</div>
                        <div className="filters-check-relo-option">
                          <input className="relo-option" type="radio" name="opentorelo" value="Yes" /> Yes
                          <span className="checkradio"></span>
                        </div>
                        <div className="filters-check-relo-option">
                          <input className="relo-option" type="radio" checked="checked" name="opentorelo" value="No" /> No
                          <span className="checkradio"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Filters Box Candidates ends */}
                  {/* Filters Box Job Orders starts */}
                  <div className="fbx-joborders">
                    <div className="fbx-grid">
                      <input type="text" className="filters-field f-1-col" placeholder="Title" />
                      <div className="filters-field filters-select f-1-col">
                        Industry
                        <ul className="filters-select-list">
                          <li className="filters-select-option">Accounting</li>
                          <li className="filters-select-option">Agriculture</li>
                          <li className="filters-select-option">Architecture</li>
                          <li className="filters-select-option">Banking & Finance</li>
                          <li className="filters-select-option">Energy</li>
                          <li className="filters-select-option">Engineering</li>
                          <li className="filters-select-option">Accounting</li>
                          <li className="filters-select-option">Agriculture</li>
                          <li className="filters-select-option">Architecture</li>
                          <li className="filters-select-option">Banking & Finance</li>
                          <li className="filters-select-option">Energy</li>
                          <li className="filters-select-option">Engineering</li>
                        </ul>
                        <div className="arrow"></div>
                      </div>
                      <input type="text" className="filters-field f-1-col" placeholder="Location" />
                      <input type="text" className="filters-field f-1-col" placeholder="Zip" />
                      <input type="text" className="filters-field f-1-col" placeholder="Distance (km)" />
                      <div className="filters-range f-3-col">
                        <div className="filters-range-label">
                          <p>Experience Range (Years)</p>
                          <input type="text" className="filters-range-count" placeholder="min" />
                          <input type="text" className="filters-range-count" placeholder="max" />
                        </div>
                        <div className="filters-range-bar">
                          <div className="filters-range-selection">
                            <div className="min-dot r-dot"><span>0</span></div>
                            <div className="max-dot r-dot"><span>23</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-range f-3-col">
                        <div className="filters-range-label">
                          <p>Salary Offer (USD per Year)</p>
                          <input type="text" className="filters-range-count" placeholder="min" />
                          <input type="text" className="filters-range-count" placeholder="max" />
                        </div>
                        <div className="filters-range-bar">
                          <div className="filters-range-selection">
                            <div className="min-dot r-dot"><span>0</span></div>
                            <div className="max-dot r-dot"><span>23</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Filters Box Job Orders ends */}
                  {/* Filters Box Companies starts */}
                  <div className="fbx-companies">
                    <div className="fbx-grid">
                      <input type="text" className="filters-field f-1-col" placeholder="Location" />
                      <input type="text" className="filters-field f-1-col" placeholder="Zip" />
                      <input type="text" className="filters-field f-1-col" placeholder="Distance (km)" />
                      <div className="filters-field filters-select f-3-col">
                        Industry
                        <ul className="filters-select-list">
                          <li className="filters-select-option">Accounting</li>
                          <li className="filters-select-option">Agriculture</li>
                          <li className="filters-select-option">Architecture</li>
                          <li className="filters-select-option">Banking & Finance</li>
                          <li className="filters-select-option">Energy</li>
                          <li className="filters-select-option">Engineering</li>
                          <li className="filters-select-option">Accounting</li>
                          <li className="filters-select-option">Agriculture</li>
                          <li className="filters-select-option">Architecture</li>
                          <li className="filters-select-option">Banking & Finance</li>
                          <li className="filters-select-option">Energy</li>
                          <li className="filters-select-option">Engineering</li>
                        </ul>
                        <div className="arrow"></div>
                      </div>
                    </div>
                  </div>
                  {/* Filters Box Companies ends */}
                </div>
                <button className="search-btn" onClick={this.search}>Search</button>
              </div>
              <div className="filters-btn-open filters-toggle">
                <img src="assets/SVG/filter-btn.svg" alt="" />
                <p>Add More Filters</p>
              </div>
              <div className="filters-controls">
                <div className="filters-btn-close filters-toggle">
                  <img src="assets/SVG/filter-close.svg" alt="" />
                  <p>Back to Quick Search</p>
                </div>
                <div className="filters-btn-clear">
                  <img src="assets/SVG/filter-clear.svg" alt="" />
                  <p>Clear Filters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;