import Creator from "./creator";
import FooterNavigation from "./footer-navigation";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <FooterNavigation />
      <div className={classes.explanation}>
        <p>
          The content of this website is <span>fictional</span>. The purpose of
          this website is to practise my web development skills.
        </p>
      </div>
      <Creator />
    </footer>
  );
}
