import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import { useState, useEffect } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import { sampleData } from "./sampleData";

function App() {
  const [data, setData] = useState(sampleData);
  const [year, setYear] = useState(new Date().getFullYear());

  const handleNewYearValue = (newYear) => {
    setYear(newYear);
  };
  const createNewExpenseHandler = (expense) => {
    setData((prevState) => {
      return [expense, ...prevState];
    });
  };

  useEffect(() => {}, [data]);

  return (
    <div>
      <h2>ExpenseApp</h2>
      <Card className="app-container">
        <NewExpense onAddExpense={createNewExpenseHandler} />
        <ExpenseFilter data={data} onChangeYearValue={handleNewYearValue} />
        <Expenses data={data} year={year} />
      </Card>
    </div>
  );
}

export default App;
