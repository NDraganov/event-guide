import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";

import classes from "./button.module.css";

export default function Button({ href, title, text, onClick }) {
  if (href) {
    return (
      <Link className={classes.button} href={href} title={title}>
        {text} <BiArrowFromLeft />
      </Link>
    );
  }
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
}
