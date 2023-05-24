import Image from "next/image";

import classes from "./event-item.module.css";

export default function EventItem({
  title,
  image,
  description,
  location,
  date,
}) {
  return (
    <div className={classes.item}>
      <div>
        <Image src={image} alt={title} fill />
      </div>
      <div className={classes.details}>
        <h2>{title}</h2>
        <p className={classes.description}>{description}</p>
        <address>{location}</address>
        <p className={classes.date}>{date}</p>
      </div>
    </div>
  );
}
