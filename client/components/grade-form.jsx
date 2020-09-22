import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: '', wantsToUpdate: false };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdateBtn = this.handleUpdateBtn.bind(this);
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
    this.setState({ name: '', course: '', grade: '', wantsToUpdate: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', course: '', grade: '' });
  }

  handleUpdateBtn() {
    this.props.onUpdateClick(this.state);
    this.setState({ name: '', course: '', grade: '', wantsToUpdate: false });
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateInfo !== prevProps.updateInfo) {
      this.setState({
        name: this.props.updateInfo.data.name,
        course: this.props.updateInfo.data.course,
        grade: this.props.updateInfo.data.grade,
        wantsToUpdate: this.props.wantsToUpdate
      });
    }
  }

  render() {
    let addBtn = 'btn btn-success mr-2';
    let updateBtn = 'btn btn-success mr-2';

    if (this.state.wantsToUpdate) {
      addBtn += ' d-none';
    } else {
      updateBtn += ' d-none';
    }

    return (
      <div>
        <h3 className="text-lg-left text-sm-center">Add Grade</h3>
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
          <button type="submit" className={addBtn}>
            Add
          </button>
          <button
            type="button"
            className={updateBtn}
            onClick={this.handleUpdateBtn}
          >
            Update
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
