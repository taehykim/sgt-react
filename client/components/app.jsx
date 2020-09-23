import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      updateInfo: null
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(err => console.error(err));
  }

  getAverageGrade() {
    let totalSum = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      totalSum += Number(this.state.grades[i].grade);
    }
    return Math.round(totalSum / this.state.grades.length);
  }

  addGrade(grade) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grade)
    };

    fetch('/api/grades', init)
      .then(res => res.json())
      .then(data => {
        const updated = [...this.state.grades];
        updated.push(data);
        this.setState({ grades: updated });
      })
      .catch(err => console.error(err));
  }

  deleteGrade(id) {
    const deletingIndex = this.state.grades.findIndex(
      grade => grade.id === id
    );

    const init = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`/api/grades/${id}`, init)
      .then(res => res.json())
      .then(data => {
        const updated = [...this.state.grades];
        updated.splice(deletingIndex, 1);
        this.setState({ grades: updated });
      })
      .catch(err => console.error(err));
  }

  handleUpdateClick(data) {
    this.setState({
      updateInfo: data
    });
  }

  updateGrade(data) {
    const init = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`api/grades/${this.state.updateInfo.id}`, init)
      .then(res => res.json())
      .then(data => {
        const updatingIndex = this.state.grades.findIndex(
          grade => grade.id === this.state.updateInfo.id
        );

        const updated = [...this.state.grades];
        updated[updatingIndex] = data;
        this.setState({
          grades: updated,
          updateInfo: null
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const avg = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={avg} />
        <hr></hr>
        <div className="row flex-lg-row flex-sm-column align-items-lg-start justify-content-sm-center align-items-sm-center">
          <div className="col-lg-8 col-sm-12">
            <GradeTable
              grades={this.state.grades}
              onDeleteClick={this.deleteGrade}
              onUpdateClick={this.handleUpdateClick}
            />
          </div>
          <div className="col-lg-4 col-sm-12">
            <GradeForm
              onSubmit={this.addGrade}
              onUpdateClick={this.updateGrade}
              updateInfo={this.state.updateInfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
