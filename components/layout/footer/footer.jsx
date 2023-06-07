import Creator from "./creator";
import FooterNavigation from "./footer-navigation";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <hr className={classes.line} />
      <div className={classes.explanation}>
        <p>
          The content of this website is <span>fictional</span>. The purpose of
          this website is to practice my web development skills.
        </p>
      </div>
      <FooterNavigation />
      <Creator />
    </footer>
  );
}
