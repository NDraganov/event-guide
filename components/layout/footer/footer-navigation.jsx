import Link from "next/link";

import classes from "./footer-navigation.module.css";

export default function FooterNavigation() {
  return (
    <div className={classes.footerNav}>
      <div>
        <Link href={"/about"} title={"About us"}>
          About us
        </Link>
      </div>
    </div>
  );
}
