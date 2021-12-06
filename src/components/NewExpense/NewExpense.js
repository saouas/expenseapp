import "./NewExpense.css";
import { useState, useEffect } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHanlder = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };

  return <NewExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />;
};

export default NewExpense;