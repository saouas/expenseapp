import { useState } from "react";
import Card from "../UI/Card";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const handleTitle = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const handlePrice = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };
  const handleDate = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: userInput.title,
      price: userInput.price,
      date: userInput.date,
    };

    props.onSaveExpenseData(expenseDate);
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <Card className="newexpense-container">
      <form className="newexpense__form" onSubmit={submitHandler}>
        <div className="newexpense-container__control">
          <label>Title</label>
          <input value={userInput.title} onChange={handleTitle} type="text" />
        </div>

        <div className="newexpense-container__control">
          <label>Price</label>
          <input
            value={userInput.price}
            onChange={handlePrice}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="newexpense-container__control">
          <label>Date</label>
          <input
            value={userInput.date}
            onChange={handleDate}
            type="date"
            min="2019-01-01"
          />
        </div>
        <div className="newexpense-container__control">
          <button className="newexpense-container__button">Add</button>
        </div>
      </form>
    </Card>
  );
};

export default NewExpenseForm;
