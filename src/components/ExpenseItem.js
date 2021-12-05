import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item__date-description">
        <img
          alt="Icon calendar"
          className="expense-item__date-description__icon"
          src={`${process.env.PUBLIC_URL}/icons/date.png`}
        />
        <div className="expense-item__date-description__date">5/12/2021</div>
      </div>

      <div className="expense-item__description">
        <h2 className="expense-item__description__name">Coffe</h2>
      </div>

      <div className="expense-item__description__price">$5</div>
    </div>
  );
};

export default ExpenseItem;
