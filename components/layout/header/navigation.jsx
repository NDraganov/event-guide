import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavigationBrand from "./navigation-brand";
import NavigationLink from "./navigation-link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import classes from "./navigation.module.css";

export default function Navigation({ click }) {
  const [header, setHeader] = useState(false);

  const router = useRouter();
  const currentRouter = router.pathname;

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
      <NavigationBrand href={"/"} title={"Home page"} text={"DevGuide"} />
      <nav>
        <ul className={classes.links}>
          <NavigationLink
            style={
              currentRouter === "/front-end-events"
                ? classes.active
                : classes.inactive
            }
            href={"/front-end-events"}
            title={"Front-end events"}
            text={"FRONT-END"}
          />
          <NavigationLink
            style={
              currentRouter === "/back-end-events"
                ? classes.active
                : classes.inactive
            }
            href={"/back-end-events"}
            title={"Back-end events"}
            text={"BACK-END"}
          />
          <NavigationLink
            style={
              currentRouter === "/full-stack-events"
                ? classes.active
                : classes.inactive
            }
            href={"/full-stack-events"}
            title={"Full stack events"}
            text={"FULL-STACK"}
          />
          <NavigationLink
            style={
              currentRouter === "/all-events"
                ? classes.active
                : classes.inactive
            }
            href={"/all-events"}
            title={"All events"}
            text={"ALL EVENTS"}
          />
        </ul>
      </nav>
      <HiOutlineMenuAlt3 onClick={click} />
    </header>
  );
}
