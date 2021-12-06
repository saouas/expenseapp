import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import { useState, useEffect } from "react";

function App() {
  const sampleData = [
    {
      date: "2021-12-05",
      title: "Coffe",
      price: "5",
    },
    {
      date: "2021-12-04",
      title: "Apple Cloud",
      price: "2",
    },
    {
      date: "2021-12-01",
      title: "Food",
      price: "50.65",
    },
    {
      date: "2021-12-02",
      title: "Gasoil",
      price: "70",
    },
  ];

  const [data, setData] = useState(sampleData);
  const createNewExpenseHandler = (expense) => {
    setData((prevState) => {
      let newData = [...prevState];
      newData.push(expense);
      return newData;
    });
  };

  useEffect(() => {}, [data]);

  return (
    <div>
      <h2>ExpenseApp</h2>
      <Card className="app-container">
        <NewExpense onAddExpense={createNewExpenseHandler} />
        <Expenses data={data} />
      </Card>
    </div>
  );
}

export default App;
