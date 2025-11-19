// import React from 'react';

const ExpenseList = ({ expenseItems, setExpenseItems }) => {
  const deleteItem = (id) => {
    setExpenseItems(expenseItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="mt-4">Your expenses</h2>
      <table className="table table-striped table-bordered border-primary">
        <thead>
          <tr className="table-secondary">
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {expenseItems.map((elt) => {
            return (
              <tr key={elt.id}>
                <th scope="row">{elt.id}</th>
                <td>{elt.item}</td>
                <td>{elt.category}</td>
                <td>{elt.quantity}</td>
                <td>{elt.price} $</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteItem(elt.id)}
                  >
                    ☒ Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* total row */}
        <tfoot className="table-group-divider">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th className="table-success">
              <strong>Total: </strong>
            </th>
            <th className="table-success">
              <strong>
                {expenseItems
                  .reduce((acc, val) => acc + val.price * val.quantity, 0)
                  .toFixed(2)}{" "}
                $
              </strong>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
