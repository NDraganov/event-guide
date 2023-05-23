import Head from "next/head";
import { Fragment } from "react";
import EventsList from "@/components/events/events-list";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Event Guide</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <EventsList />
      </div>
    </Fragment>
  );
}
