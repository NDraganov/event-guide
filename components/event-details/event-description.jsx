import classes from "./event-description.module.css";

export default function EventDescription({ description }) {
  return (
    <section className={classes.description}>
      <p>{description}</p>
    </section>
  );
}
