import Link from "next/link";

import classes from "./navigation-link.module.css";

export default function NavigationLink({ href, title, text }) {
  return (
    <li className={classes.link}>
      <Link href={href} title={title}>
        {text}
      </Link>
    </li>
  );
}
