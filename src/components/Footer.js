import React, { useState } from 'react';

const Footer = (props) => {
  const [formValue, setFormValue] = useState('');
  const [costValue, setCostValue] = useState('');

  const onFormSubmit = (e, cost) => {
    // console.log(formValue);
    e.preventDefault();
    props.onSubmit(formValue, costValue);
    setFormValue('');
    setCostValue('');
  };
  return (
    <div>
      <h4>Add Expense</h4>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          // onChange={()}
        />
        <label>Cost</label>
        <input
          type="number"
          value={costValue}
          onChange={(e) => setCostValue(e.target.value)}
        ></input>
      </form>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        onClick={onFormSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default Footer;
