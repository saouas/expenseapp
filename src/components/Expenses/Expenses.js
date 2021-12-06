import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ data }) => {
  return (
    <Card className="expenses__container">
      {data.map((el, index) => {
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
