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
        <div className="expense-item__date-description__date">
          {props.sampleDate.date}
        </div>
      </div>

      <div className="expense-item__description">
        <h2 className="expense-item__description__name">{props.sampleDate.name}</h2>
      </div>

      <div className="expense-item__description__price">
        ${props.sampleDate.price}
      </div>
    </div>
  );
};

export default ExpenseItem;
