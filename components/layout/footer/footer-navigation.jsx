import Link from "next/link";

import classes from "./footer-navigation.module.css";

export default function FooterNavigation() {
  return (
    <div className={classes.footerNav}>
      <Link href={"/about-us"} title={"About us"}>
        About us
      </Link>
      <Link href={"/terms-and-conditions"} title={"Terms and Conditions"}>
        Terms and Conditions
      </Link>
    </div>
  );
}
