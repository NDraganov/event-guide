import NavigationLink from "./navigation-link";
import classes from "./navigation.module.css";

export default function Navigation() {
  return (
    <header className={classes.header}>
      <h2>Events Guide</h2>
      <nav>
        <ul>
          <NavigationLink
            href={"/front-end-events"}
            title={"Front-end events"}
            text={"Front-end events"}
          />
          <NavigationLink
            href={"/back-end-events"}
            title={"Back-end events"}
            text={"Back-end events"}
          />
          <NavigationLink
            href={"/full-stack-events"}
            title={"Full stack events"}
            text={"Full stack events"}
          />
          <NavigationLink
            href={"/all-events"}
            title={"All events"}
            text={"All events"}
          />
        </ul>
      </nav>
    </header>
  );
}
