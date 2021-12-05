import ExpenseItem from './components/ExpenseItem';


function App() {
  const sampleDate = {
    date: "5/12/2021",
    name: "Coffe",
    price: "5",
  };

  return (
    <div>
      <h2>ExpenseApp</h2>
      <ExpenseItem sampleDate={sampleDate} />
    </div>
  );
}

export default App;
