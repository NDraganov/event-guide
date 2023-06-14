import Button from "../ui/button";
import classes from "./results-intro.module.css";

export default function ResultsIntro({ date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.results}>
      <h1>All events in {formattedDate}</h1>
      <Button
        href={"/all-events"}
        title={"All Events"}
        text={"Back to All Events"}
      />
    </section>
  );
}
