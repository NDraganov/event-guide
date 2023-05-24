import Image from "next/image";

import classes from "./event-item.module.css";

export default function EventItem({
  title,
  image,
  description,
  location,
  date,
}) {
  const formattedAddress = location.replaceAll(",", "\n");
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
        <h2>{title}</h2>
        <p className={classes.description}>{description}</p>
        <p className={classes.location}>{formattedAddress}</p>
        <p className={classes.date}>{formattedDate}</p>
      </div>
    </div>
  );
}
