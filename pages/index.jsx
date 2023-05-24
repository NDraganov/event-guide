import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";
import { getFeaturedEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function Home({ featuredEvents }) {
  return (
    <Fragment>
      <Head>
        <title>Event Guide</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={classes.home}>
        <EventsList eventsItems={featuredEvents} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 300,
  };
}
