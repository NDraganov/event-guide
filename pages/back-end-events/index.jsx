import Head from "next/head";
import { Fragment } from "react";
import PageIntro from "@/components/events/page-intro";
import EventsList from "@/components/events/events-list";
import { getBackEndEvents } from "@/helpers/api-util";

import classes from "./index.module.css";

export default function BackEndPage({ backEndEvents }) {
  return (
    <Fragment>
      <Head>
        <title>BACK-END EVENTS</title>
        <meta
          name="description"
          content="Explore back-end programmer's events this year"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PageIntro
          title={"All back-end events"}
          introduction={"Explore all back-end events."}
        />
        <EventsList eventsItems={backEndEvents} />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const backEndEvents = await getBackEndEvents();

  return {
    props: {
      backEndEvents: backEndEvents,
    },
    revalidate: 300,
  };
}
