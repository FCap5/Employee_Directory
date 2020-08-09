import React from 'react';
import './css/styles.css';

export default function Body(props) {
  return (
    <tbody>
      {props.value.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.first}</td>
          <td>{employee.last}</td>
          <td>{employee.department}</td>
          <td>{employee.hasDog}</td>
        </tr>
      ))}
    </tbody>
  );
}
