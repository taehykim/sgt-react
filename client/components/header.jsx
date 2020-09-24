import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row mt-3 justify-content-between align-items-center flex-lg-row flex-sm-column">
        <h1>Gradebook</h1>
        <h2 className="avg-grade">
          Average Grade
          <span className="badge badge-pill badge-primary ml-2">
            {this.props.average ? this.props.average : 'N/A'}
          </span>
        </h2>
      </div>
    );
  }
}

export default Header;
