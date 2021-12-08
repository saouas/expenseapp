import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { getYear } from "../../utils/date";

const Expenses = ({ data, year }) => {
  return (
    <Card className="expenses__container">
      {data && data
        .filter((expense) => {
          return getYear(expense.date) === year.toString();
        })
        .map((el, index) => {
          console.log(el);
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
