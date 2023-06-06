import { useRef } from "react";
import Button from "../ui/button";

import classes from "./events-search-title.module.css";

export default function EventsSearchTitle(props) {
  const titleRef = useRef();
  const allEvents = props.title;

  const onSubmitTitleHandler = (event) => {
    event.preventDefault();
    const selectedTitle = titleRef.current.value;
    props.onSearchTitle(selectedTitle);
  };
  return (
    <section>
      <form className={classes.formTitle} onSubmit={onSubmitTitleHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <select name="" id="title" ref={titleRef}>
            {allEvents.map((event) => (
              <option value={event.id} key={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        </div>
        <Button text={"Find Events"} />
      </form>
    </section>
  );
}
