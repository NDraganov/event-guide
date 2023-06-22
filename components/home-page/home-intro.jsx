import Image from "next/image";
import { FaHashtag } from "react-icons/fa";

import classes from "./home-intro.module.css";
import Button from "../ui/button";

export default function HomeIntro() {
  return (
    <section className={classes.homeIntro}>
      <div className={classes.image}>
        {/* Source - 
        https://www.aikenhouse.com/post/what-are-the-top-software-developers-in-the-pittsburgh-area */}
        <Image
          src={"/images/laptop.jpeg"}
          title={"Laptop"}
          width={600}
          height={400}
        />
      </div>
      <div className={classes.intro}>
        <div className={classes.title}>
          <FaHashtag />
          <h2>
            <span>1</span> Platform for <span>Dev</span> learning events.
          </h2>
        </div>
        <div>
          <p>Here you can find events on every development topic and level.</p>
        </div>
        <Button
          href={"/all-events"}
          title={"All Events"}
          text={"Explore Events"}
        />
      </div>
    </section>
  );
}
