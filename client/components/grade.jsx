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
        <td className="align-middle">{this.props.grade.name}</td>
        <td className="align-middle">{this.props.grade.course}</td>
        <td className="align-middle">{this.props.grade.grade}</td>
        <td className="align-middle">
          <button
            className="btn btn-danger rounded-pill border-0 mr-2 delete-btn"
            onClick={this.handleDeleteClick}
          >
            DELETE
          </button>
          <button
            className="btn btn-primary rounded-pill border-0 update-btn"
            onClick={this.handleUpdateClick}
          >
            UPDATE
          </button>
        </td>
      </tr>
    );
  }
}

export default Grade;
