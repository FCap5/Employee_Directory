import React, { Component } from 'react';
import './css/styles.css';
import Body from './Body';
import Users from './data/Users.json';

console.log(Users);
export default class Table extends Component {
  state = Users;

  handleSubmit = (event) => {
    const sortVal = event.target.value;
    event.preventDefault();
    console.log(event);
    if (!this.state.sorted) {
      this.setState({
        // https://bit.ly/3kqpvZL
        employees: this.state.employees.sort((a, b) =>
          a[sortVal].localeCompare(b[sortVal])
        ),
        sorted: true,
      });
    } else {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          b[sortVal].localeCompare(a[sortVal])
        ),
        sorted: false,
      });
    }
  };

  handleClick = () => {
    if (!this.state.check) {
      const hasDogArray = this.state.employees.filter(
        (employee) => employee.hasDog === 'Yes'
      );
      const ogArray = this.state.employees;
      this.setState({
        employees: hasDogArray,
        ogArray: ogArray,
        check: true,
      });
    } else {
      this.setState({ employees: this.state.ogArray, check: false });
    }
    return;
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              First Name
              <button value="first" onClick={this.handleSubmit}>
                Sort
              </button>
            </th>
            <th>
              Last Name
              <button value="last" onClick={this.handleSubmit}>
                Sort
              </button>
            </th>
            <th>
              Department
              <button value="department" onClick={this.handleSubmit}>
                Sort
              </button>
            </th>
            <th>
              Has Dog
              <input
                value="hasDog"
                type="checkbox"
                onClick={this.handleClick}
              ></input>
            </th>
          </tr>
        </thead>
        <Body value={this.state.employees} />
      </table>
    );
  }
}
