import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import { useState, useEffect } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

function App() {
  //date format: yyyy-mm-dd
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
      date: "2021-11-02",
      title: "Gasoil",
      price: "70",
    },
  ];

  const [data, setData] = useState(sampleData);
  const [year, setYear] = useState(new Date().getFullYear())
  
  const handleNewYearValue = (newYear) => {
    setYear(newYear);
  }
  const createNewExpenseHandler = (expense) => {
    setData((prevState) => {
      return [expense, ...prevState]
    });


  };

  useEffect(() => {}, [data]);

  return (
    <div>
      <h2>ExpenseApp</h2>
      <Card className="app-container">
        <NewExpense onAddExpense={createNewExpenseHandler} />
        <ExpenseFilter data={data} onChangeYearValue={handleNewYearValue}/>
        <Expenses data={data} year={year}/>
      </Card>
    </div>
  );
}

export default App;
