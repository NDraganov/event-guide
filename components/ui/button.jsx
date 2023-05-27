import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";

import classes from "./button.module.css";

export default function Button({ href, title, text }) {
  return (
    <Link className={classes.button} href={href} title={title}>
      {text} <BiArrowFromLeft />
    </Link>
  );
}
