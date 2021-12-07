import "./ExpenseBar.css";
import { useState, useEffect } from "react";

const ExpenseBar = (props) => {
  const [value, setValue] = useState(0);
  const [month, setMonth] = useState("Default");

  useEffect(() => {
    if (props.value !== undefined) setValue(props.value);
    if (props.month !== undefined) setMonth(props.month);
  }, []);

  useEffect(() => {
    if (props.value !== undefined) setValue(props.value);
    if (props.month !== undefined) setMonth(props.month);
  }, [props.value]);

  return (
    <div className="expense-bar">
      <progress className="reverse-progress" max="100" min="0" value={value} />
      <p className="expense-bar__text">{month}</p>
    </div>
  );
};

export default ExpenseBar;
