import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

import classes from "./creator.module.css";

export default function Creator() {
  const linkedHref = "https://www.linkedin.com/in/nedyalko-draganov-12958a235/";
  const gitHref = "https://github.com/NDraganov";
  const currentYear = new Date().getFullYear();
  return (
    <div className={classes.creator}>
      <div className={classes.section}>
        <Link href={linkedHref} title="LinkedIn" target="_blank">
          <AiOutlineLinkedin />
        </Link>
        <Link href={gitHref} title="GitHub" target="_blank">
          <AiOutlineGithub />
        </Link>
      </div>
      <div className={classes.section}>
        <p>Nedyalko Draganov</p>
        <p>
          &copy;
          <span>{currentYear}</span>
        </p>
      </div>
    </div>
  );
}
