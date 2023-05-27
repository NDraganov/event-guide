import { Fragment } from "react";
import EventTitle from "./event-title";
import EventLogistics from "./event-logistics";
import EventDescription from "./event-description";

import classes from "./event-details.module.css";

export default function EventDetails() {
  return (
    <Fragment>
      <EventTitle title={"Fundamentals of React.js"} />
      <EventLogistics />
      <EventDescription />
    </Fragment>
  );
}
