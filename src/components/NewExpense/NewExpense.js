import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import {useState, useEffect} from 'react';
import WaitingNewExpense from "./WaitingNewExpense";

const NewExpense = (props) => {
  const [openNewExpense, setOpenNewExpense] = useState(false);
  const handleNewOpenValue = () =>{
    setOpenNewExpense((prevValue) =>{
      return !prevValue
    });
  }
  const saveExpenseDataHanlder = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };
  useEffect(()=>{

  },[openNewExpense]);

  return (<div>
    {openNewExpense ? <NewExpenseForm onSaveExpenseData={saveExpenseDataHanlder} onChangeCloseValue={handleNewOpenValue} /> : <WaitingNewExpense onChangeOpenValue={handleNewOpenValue} /> }
  </div>
  )
};

export default NewExpense;
