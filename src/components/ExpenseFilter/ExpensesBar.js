import ExpenseBar from './ExpenseBar';
import './ExpensesBar.css'
import {useState, useEffect} from 'react';
import { MonthShortcut, MonthShortcutReverse } from "../../utils/date";
import { getKeyByValue } from "../../utils/functions";

const ExpensesBar = (props) => {
    const [ExpenseBarsInfo, setExpenseBarsInfo] = useState([]);

    const calculateBudgetYearRepartition = (year) => {
        let prevData = props.data;
        let freshData = [];
        // eslint-disable-next-line array-callback-return
        MonthShortcut.map((month, index) => {
            let acc = 0;
            let actualMonthCode = Object.values(month)[0];
            // eslint-disable-next-line array-callback-return
            prevData.map((el) => {
              let tmp_date = el.date;
              //extracting the month code with the selected year
              let monthRegex = new RegExp(`(${props.year})-([0-9]{2})-([0-9]{2})`);
              let find = tmp_date.match(monthRegex);
              // eslint-disable-next-line array-callback-return
              if (!find) return;
              if (find[3] === actualMonthCode) {
                acc = parseInt(el.price) + acc;
              }
            });
            //return the month as international string code
            freshData.push({
              month: getKeyByValue([month], actualMonthCode),
              value: acc,
            });
          });
        return freshData;
    }

    useEffect(() => {
        if (!props.data) return;
        if (!props.year) return;
        const budgetRepartition = calculateBudgetYearRepartition(props.year);
        setExpenseBarsInfo(budgetRepartition);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        if (!props.data) return;
        if (!props.year) return;
        const budgetRepartition = calculateBudgetYearRepartition(props.year);
        setExpenseBarsInfo(budgetRepartition);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.year]);

    return(
        <div className="expense-filter__container__bars">
        {ExpenseBarsInfo && ExpenseBarsInfo.map((el, index) => {
          return <ExpenseBar key={index} value={el.value} month={el.month} />;
        })}
      </div>
    )
};

export default ExpensesBar;