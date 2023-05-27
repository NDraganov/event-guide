import Image from "next/image";

import classes from "./event-logistics.module.css";

export default function EventLogistics({ image, date, location }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section>
      <div>
        <div>
          <Image src={image} width={400} height={250} />
        </div>
        <div>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{location}</address>
          </div>
        </div>
      </div>
    </section>
  );
}
