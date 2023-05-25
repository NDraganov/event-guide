import { useEffect, useState } from "react";
import NavigationLink from "./navigation-link";
import classes from "./navigation.module.css";

export default function Navigation() {
  const [header, setHeader] = useState(false);

  const changeBackgroundHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    changeBackgroundHeader();
    window.addEventListener("scroll", changeBackgroundHeader);
  }, [header]);
  return (
    <header className={header ? classes.scrolled : classes.header}>
      <h2 className={classes.title}>Events Guide</h2>
      <nav>
        <ul className={classes.links}>
          <NavigationLink
            href={"/front-end-events"}
            title={"Front-end events"}
            text={"Front-end"}
          />
          <NavigationLink
            href={"/back-end-events"}
            title={"Back-end events"}
            text={"Back-end"}
          />
          <NavigationLink
            href={"/full-stack-events"}
            title={"Full stack events"}
            text={"Full stack"}
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
