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
            <label htmlFor="month">Month</label>
            <select name="month" id="month" ref={monthRef}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="Octomber">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select name="year" id="year" ref={yearRef}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
        </div>
        <Button text={"Find Events"} />
      </form>
    </section>
  );
}
