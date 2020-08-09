import React from 'react';

export default function TableHead(props) {
  return (
    <thead>
      <tr>
        <th>
          First Name
          <button value="first" onClick={props.clickOne}>
            Sort
          </button>
        </th>
        <th>
          Last Name
          <button value="last" onClick={props.clickOne}>
            Sort
          </button>
        </th>
        <th>
          Department
          <button value="department" onClick={props.clickOne}>
            Sort
          </button>
        </th>
        <th>
          Has Dog
          <input
            value="hasDog"
            type="checkbox"
            onClick={props.clickTwo}
          ></input>
        </th>
      </tr>
    </thead>
  );
}
