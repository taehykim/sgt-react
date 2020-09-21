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
            </tr>
          </thead>
          <tbody>
            {this.props.grades.map(grade => {
              return <Grade key={grade.id} grade={grade} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GradeTable;
