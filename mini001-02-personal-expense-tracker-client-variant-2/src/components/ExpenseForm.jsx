// import React from 'react';

import { useForm } from "react-hook-form";

const ExpenseForm = ({ expenseItems, setExpenseItems }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addItem = (data) => {
    setExpenseItems(() => [...expenseItems, data]);
  };

  return (
    <div>
      <h2 className="mt-4">Expenses Form</h2>
      <form
        // action=""
        className="mb-4"
        // onSubmit={handleSubmit((data) => console.log(data))}
        onSubmit={handleSubmit((data) => addItem(data))}
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
            {...register("item", { minLength: 6, required: true })}
            placeholder="An item"
          />
          {errors.item?.type == "required" && (
            <p className="text-danger mt-1">This field is required!</p>
          )}
          {errors.item?.type == "minLength" && (
            <p className="text-danger mt-1">
              This field require at least 6 characters !
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="form-select mb-3"
            {...register("category", { required: true })}
            // placeholder="Category"
          >
            <option value="all"></option>
            <option value="bills">bills</option>
            <option value="groceries">groceries</option>
            <option value="vegetables">vegetables</option>
            <option value="subscription">subscription</option>
            <option value="training">training</option>
          </select>
          {errors.category?.type == "required" && (
            <p className="text-danger mt-1">This field is required!</p>
          )}
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
            {...register("quantity", { required: true })}
            placeholder="Quantity"
          />
          {errors.quantity?.type == "required" && (
            <p className="text-danger mt-1">This field is required!</p>
          )}
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
            {...register("price", { required: true })}
            placeholder="Amount"
          />
          {errors.amount?.type == "required" && (
            <p className="text-danger mt-1">This field is required!</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
