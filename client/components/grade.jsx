import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.grade.id);
  }

  handleUpdateClick() {
    this.props.onUpdateClick(this.props.grade);
  }

  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td>
          <button
            className="btn btn-danger mr-2"
            onClick={this.handleDeleteClick}
          >
            DELETE
          </button>
          <button className="btn btn-primary" onClick={this.handleUpdateClick}>
            UPDATE
          </button>
        </td>
      </tr>
    );
  }
}

export default Grade;
