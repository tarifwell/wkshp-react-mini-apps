// import React from 'react';

import { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    item: "",
    category: "",
    quantity: 0,
    amount: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = () => {
	  
	  
  };
  
  return (
    <div>
      <h2 className="mt-4">Expenses Form</h2>
      <form action="" className="mb-4" 
		onSubmit={handleSubmit} 
	  >
        <div className="mb-3">
          <label htmlFor="item" className="form-label">
            Item
          </label>
          <input
            type="text"
            id="item"
            name="item"
            className="form-control"
            value={formData.item}
            onChange={(event) => handleChange(event)}
			placeholder="An item"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="form-select mb-3"
            value={formData.category}
            onChange={(event) => handleChange(event)}
			// placeholder="Category"
          >
            <option value="all"></option>
            <option value="bills">bills</option>
            <option value="groceries">groceries</option>
            <option value="vegetables">vegetables</option>
            <option value="subscription">subscription</option>
            <option value="training">training</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control"
            value={formData.quantity}
            onChange={(event) => handleChange(event)}
			placeholder="Quantity"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="form-control"
            value={formData.amount}
            onChange={(event) => handleChange(event)}
			placeholder="Amount"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
