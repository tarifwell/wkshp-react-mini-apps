// import React from 'react';

const ExpenseFilter = ({ expenseItems, setExpenseItems }) => {
  const filterItem = (categ) => {
    setExpenseItems(expenseItems.filter((item) => item.category === categ));
  };

  return (
    <div>
      <h2 className="mt-4">Select one categorie</h2>
      <select
        name="category"
        id="category"
        className="form-select mb-3"
        onChange={(event) => {
          filterItem(event.target.value);
        }}
      >
        <option value="all"></option>
        <option value="bills">bills</option>
        <option value="groceries">groceries</option>
        <option value="vegetables">vegetables</option>
        <option value="subscription">subscription</option>
        <option value="training">training</option>

        {/* {expenseItems.map((item) => {
          return (
            <option key={item.id} value={item.category}>
              {item.category}
            </option>
          );
        })} */}
      </select>
    </div>
  );
};

export default ExpenseFilter;
