import "./Expenses.css";
import Card from "../UI/Card";
import { getYear } from "../../utils/date";
import { useEffect, useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ data, year }) => {
  const [filteredData, setFilteredData] = useState(data);
 
  useEffect(() => {
    const filterData = (dataToFilter) => {
      return dataToFilter.filter((expense) => {
        return getYear(expense.date) === year.toString();
      });
    };
    setFilteredData(filterData(data));
  }, [data, year]);

  return (
    <Card className="expenses__container">
      <ExpensesList data={filteredData} />
    </Card>
  );
};

export default Expenses;
