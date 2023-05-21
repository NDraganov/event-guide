import { Fragment } from "react";
import Navigation from "./header/navigation";
import Footer from "./footer/footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
