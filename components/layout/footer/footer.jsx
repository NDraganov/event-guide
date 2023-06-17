import Creator from "./creator";
import FooterNavigation from "./footer-navigation";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <hr className={classes.line} />
      <div className={classes.explanation}>
        <p>
          The content of this website is <span>fictional</span>. This website is
          for educational purpose.
        </p>
      </div>
      <FooterNavigation />
      <Creator />
    </footer>
  );
}
