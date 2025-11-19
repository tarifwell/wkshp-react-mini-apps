import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, item: "water", quantity: 1, price: 30.5, category: "bills" },
    { id: 2, item: "cake", quantity: 20, price: 10.25, category: "groceries" },
    {
      id: 3,
      item: "tomatoes",
      quantity: 2,
      price: 20.452,
      category: "vegetables",
    },
    {
      id: 4,
      item: "internet",
      quantity: 1,
      price: 35,
      category: "subscription",
    },
    { id: 5, item: "gim", quantity: 1, price: 40, category: "training" },
    { id: 6, item: "swimming", quantity: 1, price: 40, category: "training" },
    {
      id: 7,
      item: "potatoes",
      quantity: 2,
      price: 20.452,
      category: "vegetables",
    },
  ]);

  return (
    <>
      <div>
        <h1>Welcome !</h1>
        <ExpenseForm expenseItems={expenses} setExpenseItems={setExpenses} />
        <ExpenseFilter expenseItems={expenses} setExpenseItems={setExpenses} />
        <ExpenseList expenseItems={expenses} setExpenseItems={setExpenses} />
      </div>
    </>
  );
}

export default App;
