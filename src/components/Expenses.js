import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const Expenses = ({ data }) => {
  return (
    <Card className="expenses__container">
        {data.map((el, index) => {
          return (
            <ExpenseItem
              key={index}
              date={el.date}
              name={el.name}
              price={el.price}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
