import "./ExpenseFilter.css";
import Card from "../UI/Card";
import Dropdown from "../UI/Dropdown";
import ExpenseBar from "./ExpenseBar";
import { useState, useEffect } from "react";
import { MonthShortcut, MonthShortcutReverse } from "../../utils/date";
import { getKeyByValue } from "../../utils/functions";

const ExpenseFilter = (props) => {
  const [ExpenseBarsInfo, setExpenseBarsInfo] = useState([]);

  useEffect(() => {
    if (!props?.data) return;
    let prevData = props.data;
    let freshData = [];
    MonthShortcut.map((month, index) => {
      let acc = 0;
      let actualMonthCode = Object.values(month)[0];
      prevData.map((el) => {
        let tmp_date = el.date;
        let monthRegex = /(([0-9]{4})-([0-9]{2})-([0-9]{2}))/;
        let find = tmp_date.match(monthRegex);

        if (find[3] === actualMonthCode) {
          acc = parseInt(el.price) + acc;
        }
      });
      freshData.push({
        month: getKeyByValue([month], actualMonthCode),
        value: acc,
      });
    });
    setExpenseBarsInfo(freshData);
  }, []);

  return (
    <Card className="expense-filter">
      <div className="expense-filter__container-filter">
        <h3 className="expense-filter__container-filter__text">
          Filter by Year
        </h3>
        <Dropdown className="expense-filter__container-filter__dropdown" />
      </div>

      <div className="expense-filter__container__bars">
        {ExpenseBarsInfo.map((el, index) => {
          return <ExpenseBar key={index} value={el.value} month={el.month} />;
        })}
      </div>
    </Card>
  );
};

export default ExpenseFilter;
