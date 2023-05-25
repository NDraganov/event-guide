import Link from "next/link";

import classes from "./navigation-brand.module.css";

export default function NavigationBrand({ href, title, text }) {
  return (
    <Link className={classes.brand} href={href} title={title}>
      {text}
    </Link>
  );
}
