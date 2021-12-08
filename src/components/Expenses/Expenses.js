import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { getYear } from "../../utils/date";
import { useEffect, useState } from "react";

const Expenses = ({ data, year }) => {
  const [filteredData, setFilteredData] = useState(data);
  const filterData = (dataToFilter) =>{
    return  dataToFilter.filter((expense) => {
      return getYear(expense.date) === year.toString();
    })
  }
  useEffect(()=>{
    setFilteredData(filterData(data))
  },[data, year])


  return (
    <Card className="expenses__container">
    {filteredData.length === 0 && <p className="no_expense_message">Nothing was found</p>}
      {filteredData && 
        filteredData.map((el, index) => {
          return (
            <ExpenseItem
              key={index}
              date={el.date}
              title={el.title}
              price={el.price}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
