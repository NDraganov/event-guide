import classes from "./event-description.module.css";

export default function EventDescription({ description }) {
  return (
    <section>
      <p>{description}</p>
    </section>
  );
}
