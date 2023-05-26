import Creator from "./creator";
import FooterNavigation from "./footer-navigation";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <FooterNavigation />
      <Creator />
    </footer>
  );
}
