import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const { name, id, cost } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge rounded-pill text-bg-primary m-2">${cost}</span>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          className="position-relative"
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
