import { useRef } from "react";
import Button from "../ui/button";

import classes from "./events-search-title.module.css";

export default function EventsSearchTitle(props) {
  const titleRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const selectedTitle = titleRef.current.value;
    props.onSearch(selectedTitle);
  };
  return (
    <section>
      <form className={classes.formTitle} onSubmit={onSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <select name="" id="title" ref={titleRef}></select>
          </div>
        </div>
        <Button text={"Find Events"} />
      </form>
    </section>
  );
}
