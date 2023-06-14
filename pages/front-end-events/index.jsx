import Head from "next/head";
import { Fragment } from "react";
import PageIntro from "@/components/events/page-intro";
import EventsList from "@/components/events/events-list";
import { getFrontEndEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function FrontEndPage({ frontEndEvents }) {
  return (
    <Fragment>
      <Head>
        <title>FRONT-END EVENTS</title>
        <meta
          name="description"
          content="Explore front-end programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PageIntro
          title={"All Front-end events"}
          introduction={"Explore all front-end events"}
        />
        <EventsList eventsItems={frontEndEvents} />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const frontEndEvents = await getFrontEndEvents();

  return {
    props: {
      frontEndEvents: frontEndEvents,
    },
    revalidate: 300,
  };
}
