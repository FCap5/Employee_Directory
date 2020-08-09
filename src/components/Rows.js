import React, { Component } from 'react';

export default class Rows extends Component {
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
  };

  sortByDepartment(event) {
    event.preventDefault();
    console.log();
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th> Last Name</th>
            <th onClick={this.sortByDepartment}>
              Department<button>Sort</button>
            </th>
            <th>
              Has Dog<input type="checkbox"></input>
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
