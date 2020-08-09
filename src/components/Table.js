import React, { Component } from 'react';
import './styles.css';

export default class Table extends Component {
  state = {
    employees: [
      {
        first: 'Ffej',
        last: 'Caplan',
        department: 'Dev',
        hasDog: 'No',
        id: 1,
      },
      {
        first: 'Dan',
        last: 'Caplan',
        department: 'Recruiting',
        hasDog: 'Yes',
        id: 2,
      },
      {
        first: 'Dana',
        last: 'McCabe',
        department: 'Management',
        hasDog: 'No',
        id: 3,
      },
      {
        first: 'Cassie',
        last: 'Sullivan',
        department: 'Dev',
        hasDog: 'Yes',
        id: 4,
      },
    ],
    sorted: false,
    check: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.sorted) {
      this.setState({
        // https://bit.ly/3kqpvZL
        employees: this.state.employees.sort((a, b) =>
          a.department.localeCompare(b.department)
        ),
        sorted: true,
      });
    } else {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          b.department.localeCompare(a.department)
        ),
        sorted: false,
      });
    }
  };

  handleClick = (event) => {
    if (!this.state.check) {
      let hasDogArray = this.state.employees.filter(
        (employee) => employee.hasDog === 'Yes'
      );
      let hasNoDogArray = this.state.employees.filter(
        (employee) => employee.hasDog === 'No'
      );
      this.setState({
        employees: hasDogArray,
        noDog: hasNoDogArray,
        check: true,
      });
    } else {
      const ogEmployeeList = this.state.employees;
      this.state.noDog.forEach((dog) => {
        ogEmployeeList.push(dog);
      });
      this.setState({ employees: ogEmployeeList, check: false });
    }
    return;
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th> Last Name</th>
            <th onClick={this.handleSubmit}>
              Department<button>Sort</button>
            </th>
            <th>
              Has Dog<input type="checkbox" onClick={this.handleClick}></input>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.first}</td>
              <td>{employee.last}</td>
              <td>{employee.department}</td>
              <td>{employee.hasDog}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
