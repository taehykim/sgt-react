import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
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
      totalSum += this.state.grades[i].grade;
    }
    return Math.round(totalSum / this.state.grades.length);
  }

  render() {
    const avg = this.getAverageGrade();
    return (
      <div className="container">
        <Header average={avg} />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
