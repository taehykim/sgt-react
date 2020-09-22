import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row mt-3 justify-content-between align-items-center flex-lg-row flex-sm-column">
        <h1>Student Grade Table</h1>
        <h2>
          Average Grade
          <span className="badge badge-secondary ml-2">
            {this.props.average ? this.props.average : 'N/A'}
          </span>
        </h2>
      </div>
    );
  }
}

export default Header;
