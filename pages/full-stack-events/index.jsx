import Head from "next/head";
import { Fragment } from "react";
import PageIntro from "@/components/events/page-intro";
import EventsList from "@/components/events/events-list";
import { getFullStackEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function FullStackEventsPage({ fullStackEvents }) {
  return (
    <Fragment>
      <Head>
        <title>FULL-STACK EVENTS</title>
        <meta
          name="description"
          content="Explore full-stack programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PageIntro
          title={"All full-stack events"}
          introduction={"Explore all full-stack events."}
        />
        <EventsList eventsItems={fullStackEvents} />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const fullStackEvents = await getFullStackEvents();

  return {
    props: {
      fullStackEvents: fullStackEvents,
    },
    revalidate: 300,
  };
}
