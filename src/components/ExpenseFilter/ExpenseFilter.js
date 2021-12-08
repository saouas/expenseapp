import "./ExpenseFilter.css";
import Card from "../UI/Card";
import Dropdown from "../UI/Dropdown";
import ExpenseBar from "./ExpenseBar";
import { useState, useEffect } from "react";
import ExpensesBar from "./ExpensesBar";

const ExpenseFilter = (props) => {
  const [yearDate, setYearDate] = useState(new Date().getFullYear());
  const [data, setData] = useState(props.data || []);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const handleNewYearDate = (date) => {
    setYearDate(date);
    props.onChangeYearValue(date);
  };

  return (
    <Card className="expense-filter">
      <div className="expense-filter__container-filter">
        <h3 className="expense-filter__container-filter__text">
          Filter by Year
        </h3>
        <Dropdown
          className="expense-filter__container-filter__dropdown"
          catchNewYearDate={handleNewYearDate}
        />
      </div>

      <ExpensesBar data={data} year={yearDate} />
    </Card>
  );
};

export default ExpenseFilter;
