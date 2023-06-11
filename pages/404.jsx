import Link from "next/link";
import Button from "@/components/ui/button";

import classes from "./404.module.css";

export default function Custom404() {
  return (
    <main className={classes.notExist}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.directions}>
        This page <span>doesn't</span> exist!
      </p>
      <p className={classes.directions}>
        Please check your <span>URL</span> or visit our{" "}
      </p>
      <Button home={"/"} title={"Home Page"} text={"HOME PAGE"}></Button>
    </main>
  );
}
