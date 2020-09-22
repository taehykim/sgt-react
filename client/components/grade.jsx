import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.grade.id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td>
          <button className="btn btn-danger" onClick={this.handleDeleteClick}>
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}

export default Grade;
