import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

import classes from "./button.module.css";

export default function Button({ href, title, text, home, onClick }) {
  if (href) {
    return (
      <Link className={classes.linkButton} href={href} title={title}>
        {text} <BiArrowFromLeft />
      </Link>
    );
  } else if (home) {
    return (
      <Link
        className={classes.linkButton}
        style={{ fontSize: 18, justifyContent: "center", gap: 8 }}
        href={home}
        title={title}
      >
        <FaHome /> {text}
      </Link>
    );
  }

  return (
    <button className={classes.button} onClick={onClick}>
      <BiSearchAlt2 /> {text}
    </button>
  );
}
