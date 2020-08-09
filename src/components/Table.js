import React, { Component } from 'react';
import './css/styles.css';
import Body from './Body';
import Users from './data/Users.json';
import TableHead from './TableHead';

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
        <TableHead clickOne={this.handleSubmit} clickTwo={this.handleClick} />
        <Body value={this.state.employees} />
      </table>
    );
  }
}
