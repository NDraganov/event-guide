import { Fragment, useState } from "react";
import Navigation from "./header/navigation";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";

import classes from "./layout.module.css";

export default function Layout(props) {
  const [sidebar, setSidebar] = useState(false);

  const handleOpenSideBar = () => {
    setSidebar(true);
  };
  const handleCloseSideBar = () => {
    setSidebar(false);
  };
  return (
    <Fragment>
      <Navigation click={handleOpenSideBar} />
      <Sidebar
        style={sidebar === false ? classes.hide : undefined}
        click={handleCloseSideBar}
      />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
