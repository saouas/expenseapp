import ExpenseItem from "./components/ExpenseItem";

function App() {
  const sampleData = [
    {
      date: "5/12/2021",
      name: "Coffe",
      price: "5",
    },
    {
      date: "4/12/2021",
      name: "Apple Cloud",
      price: "2",
    },
    {
      date: "1/12/2021",
      name: "Food",
      price: "50.65",
    },
    {
      date: "2/12/2021",
      name: "Gasoil",
      price: "70",
    },
  ];

  return (
    <div>
      <h2>ExpenseApp</h2>
      <div className="container-expense-items">
        {sampleData.map((el, index) => {
          return (
            <ExpenseItem
              key={index}
              date={el.date}
              name={el.name}
              price={el.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
