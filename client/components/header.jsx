import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row header-group">
        <h1 className="mb-3">Student Grade Table</h1>
        <h2>
          Average Grade
          <span className="badge badge-secondary ml-2">
            {this.props.average ? this.props.average : '?N/A'}
          </span>
        </h2>
      </div>
    );
  }
}

export default Header;
