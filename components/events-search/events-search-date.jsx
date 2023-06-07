import { useRef } from "react";
import Button from "../ui/button";

import classes from "./events-search-date.module.css";

export default function EventsSearchDate(props) {
  const monthRef = useRef();
  const yearRef = useRef();

  const onSubmitDateHandler = (event) => {
    event.preventDefault();
    const selectedMonth = monthRef.current.value;
    const selectedYear = yearRef.current.value;
    props.onSearchDate(selectedMonth, selectedYear);
  };
  return (
    <section>
      <form className={classes.formDate} onSubmit={onSubmitDateHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="month">MONTH</label>
            <select name="month" id="month" ref={monthRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="year">YEAR</label>
            <select name="year" id="year" ref={yearRef}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
        <Button text={"FIND EVENTS"} />
      </form>
    </section>
  );
}
