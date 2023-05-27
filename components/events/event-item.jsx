import Image from "next/image";
import Button from "../ui/button";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";

import classes from "./event-item.module.css";

export default function EventItem({ title, image, intro, location, date, id }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={classes.item}>
      <div>
        <Image src={image} alt={title} fill />
      </div>
      <div className={classes.details}>
        <div>
          <h2>{title}</h2>
          <p className={classes.intro}>{intro}</p>
          <div className={classes.eventFooter}>
            <p className={classes.location}>
              <GoLocation /> {location}
            </p>
            <p className={classes.date}>
              <BsCalendarDate /> {formattedDate}
            </p>
          </div>
        </div>
        <Button
          href={`/all-events/${id}`}
          title={"Go to event page"}
          text={"EVENT DETAILS"}
        />
      </div>
    </div>
  );
}
