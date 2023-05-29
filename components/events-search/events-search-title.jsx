import { useRef } from "react";
import Button from "../ui/button";

import classes from "./events-search-title.module.css";

export default function EventsSearchTitle(props) {
  const titleRef = useRef();
  const eventsTitle = props.title;

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
            <select name="" id="title" ref={titleRef}>
              {eventsTitle.map((event) => (
                <option value={event.id} key={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button text={"Find Events"} />
      </form>
    </section>
  );
}
