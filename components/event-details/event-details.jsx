import { Fragment } from "react";
import EventTitle from "./event-title";

import classes from "./event-details.module.css";
import EventLogistics from "./event-logistics";
import EventDescription from "./event-description";

export default function EventDetails() {
  return (
    <Fragment>
      <EventTitle title={"Fundamentals of React.js"} />
      <EventLogistics />
      <EventDescription />
    </Fragment>
  );
}
