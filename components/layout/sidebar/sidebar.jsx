import NavigationLink from "../header/navigation-link";
import { AiOutlineCloseCircle } from "react-icons/ai";

import classes from "./sidebar.module.css";

export default function Sidebar({ style, click }) {
  return (
    <div className={style}>
      <aside className={classes.sidebar}>
        <nav>
          <AiOutlineCloseCircle onClick={click} />
          <ul>
            <NavigationLink
              href={"/front-end-events"}
              title={"Front-end events"}
              text={"FRONT-END"}
            />
            <NavigationLink
              href={"/back-end-events"}
              title={"Back-end events"}
              text={"BACK-END"}
            />
            <NavigationLink
              href={"/full-stack-events"}
              title={"Full stack events"}
              text={"FULL-STACK"}
            />
            <NavigationLink
              href={"/all-events"}
              title={"All events"}
              text={"ALL EVENTS"}
            />
          </ul>
        </nav>
        <div className={classes.background}></div>
      </aside>
    </div>
  );
}
