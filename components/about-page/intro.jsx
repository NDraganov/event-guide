import Image from "next/image";
import classes from "./intro.module.css";
import Button from "../ui/button";

export function Intro({ aboutText }) {
  return (
    <div className={classes.intro}>
      <h1>About DevGuide</h1>
      <section className={classes.section}>
        <p className={classes.text}>
          {aboutText} <span>DevGuide</span> was established in 2020 in the city
          of <span>New York</span>. Since then, the number of DevGuide partners
          continuously <span>growing</span>. With over <span>120 partners</span>{" "}
          around the world, we are organising and providing{" "}
          <span>best-in-class</span> educational events for developers in areas
          such as <span>Web</span> and <span>Mobile Development</span>.
        </p>
        <p className={classes.textDark}>
          In DevGuide, we believe <span>continuous learning</span> is the key to
          the <span>progress</span> of the individual and the organisation.
          That’s why we create this amazing and{" "}
          <span>easy-to-use platform</span> with content for every department of
          the <span>Development process</span>.
        </p>
        <Button
          href={"/all-events"}
          text={"START EXPLORING"}
          title={"Start Exploring"}
        />
        {/* Source - https://www.insperity.com/blog/cost-effective-employee-training-and-development/ */}
        <Image src={"/images/development.png"} width={800} height={450} />
      </section>
    </div>
  );
}
