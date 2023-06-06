import Link from "next/link";

import classes from "./navigation-link.module.css";

export default function NavigationLink({ style, href, title, onClick, text }) {
  return (
    <li className={classes.link}>
      <Link className={style} href={href} title={title} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
}
