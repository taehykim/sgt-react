import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    return (
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.props.grades.length !== 0 ? (
              this.props.grades.map(grade => {
                return (
                  <Grade
                    key={grade.id}
                    grade={grade}
                    onDeleteClick={this.props.onDeleteClick}
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="no-grades-row text-lg-left text-sm-center"
                >
                  <h5>No Grades Recorded</h5>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GradeTable;
