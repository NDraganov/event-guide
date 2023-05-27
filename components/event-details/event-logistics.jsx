import Image from "next/image";

import classes from "./event-logistics.module.css";

export default function EventLogistics({ image, date, address }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section>
      <div>
        <div>
          <Image src={image} />
        </div>
        <div>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
      </div>
    </section>
  );
}
