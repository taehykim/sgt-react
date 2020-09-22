import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCourseChange(e) {
    this.setState({ course: e.target.value });
  }

  handleGradeChange(e) {
    this.setState({ grade: e.target.value });
  }

  handleCancel() {
    this.setState({ name: '', course: '', grade: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {
    return (
      <div>
        <h3>Add Grade</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Student Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="far fa-list-alt"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="course"
              placeholder="Student Course"
              value={this.state.course}
              onChange={this.handleCourseChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-graduation-cap"></i>
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              id="grade"
              placeholder="Student Grade"
              value={this.state.grade}
              onChange={this.handleGradeChange}
            />
          </div>
          <button type="submit" className="btn btn-success mr-2">
            Add
          </button>
          <button
            type="reset"
            className="btn btn-outline-dark"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default GradeForm;
