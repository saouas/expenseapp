import "./Dropdown.css";
import {useState} from 'react';

const Dropdown = (props) => {
  const classes = `card ${props?.className ? props?.className : ""}`;
  const [yearVar, setYearVar] = useState((new Date().getFullYear()));

  const handleChangeYear = (e) =>{
    setYearVar(e.target.value)
    props.catchNewYearDate(e.target.value);
  }

  return (
    <div>
      <select className={classes} value={yearVar} onChange={handleChangeYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Dropdown;
