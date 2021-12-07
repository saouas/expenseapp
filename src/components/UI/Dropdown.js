import "./Dropdown.css";

const Dropdown = (props) => {
  const classes = `card ${props?.className ? props?.className : ""}`;
  return (
    <div>
      <select className={classes}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Dropdown;
