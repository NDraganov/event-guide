import classes from "./event-title.module.css";

export default function EventTitle({ title }) {
  return (
    <section className={classes.title}>
      <h1>{title}</h1>
    </section>
  );
}
