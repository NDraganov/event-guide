import classes from "./page-intro.module.css";

export default function PageIntro({ title, introduction }) {
  return (
    <section className={classes.pageIntro}>
      <h1>{title}</h1>
      <p>{introduction}</p>
    </section>
  );
}
