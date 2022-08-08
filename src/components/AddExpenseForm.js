import React, { useState } from 'react';

const AddExpenseForm = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  return (
    <form>
      <div className="row"></div>
      <div className="col-sm">
        <label htmlFor="name">Name</label>
        <input
          required="required"
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="col-sm">
        <label htmlFor="cost">Cost</label>
        <input
          type="text"
          className="form-control"
          id="cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        ></input>
      </div>
      <div className="col-sm">
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
