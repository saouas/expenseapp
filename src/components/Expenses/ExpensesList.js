import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ data }) => {
  if (data.length === 0)
    return <p className="no_expense_message">Nothing was found</p>;

  return (
    <div>
      {data &&
        data.map((el, index) => {
          return (
            <ExpenseItem
              key={index}
              date={el.date}
              title={el.title}
              price={el.price}
            />
          );
        })}
    </div>
  );
};

export default ExpensesList;
