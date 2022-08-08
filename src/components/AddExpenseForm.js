import React from 'react';

const AddExpenseForm = () => {
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
        ></input>
      </div>
      <div className="col-sm">
        <label htmlFor="cost">Cost</label>
        <input type="text" className="form-control" id="cost"></input>
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
