import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";

import classes from "./event-logistics.module.css";

export default function EventLogistics({ image, alt, date, location }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section className={classes.logistics}>
      <div className={classes.container}>
        <div>
          <Image src={image} alt={alt} width={500} height={300} />
        </div>
        <div className={classes.eventDetails}>
          <div>
            <time>
              <BsCalendarDate />
              {formattedDate}
            </time>
          </div>
          <div className={classes.address}>
            <address>
              <GoLocation />
              {location}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
