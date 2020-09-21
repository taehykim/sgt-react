import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.props.grades.map(grade => {
            return <Grade key={grade.id} grade={grade} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
