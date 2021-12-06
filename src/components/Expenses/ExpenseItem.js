import "./ExpenseItem.css";
import Card from "./../UI/Card";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__date-description expense-item__sub_item">
        <img
          alt="Icon calendar"
          className="expense-item__date-description__icon"
          src={`${process.env.PUBLIC_URL}/icons/date.png`}
        />
        <div className="expense-item__date-description__date">{date}</div>
      </div>

      <div className="expense-item__description expense-item__sub_item">
        <h2 className="expense-item__description__name">{title}</h2>
      </div>

      <div className="expense-item__description__price expense-item__sub_item">
        ${price}
      </div>
    </Card>
  );
};

export default ExpenseItem;
