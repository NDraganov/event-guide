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
      <form onSubmit={onSubmitDateHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="month"></label>
            <select name="month" id="month" ref={monthRef}></select>
          </div>
          <div className={classes.control}>
            <label htmlFor="year"></label>
            <select name="year" id="year" ref={yearRef}></select>
          </div>
        </div>
        <Button text={"Find Events"} />
      </form>
    </section>
  );
}
