import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  const { name, id, cost } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge rounded-pill text-bg-primary mt-2 ">
          £{cost}
        </span>
        <TiDelete size="1.5em" className='m-2' />
      </div>
    </li>
  );
};

export default ExpenseItem;
