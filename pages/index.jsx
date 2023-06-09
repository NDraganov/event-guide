import Head from "next/head";
import { Fragment } from "react";
import HomeIntro from "@/components/home-page/home-intro";
import PageIntro from "@/components/events/page-intro";
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
      <main>
        <HomeIntro />
        <PageIntro
          title={"Most popular events"}
          introduction={"Explore the most popular developer events this year."}
        />
        <EventsList eventsItems={featuredEvents} />
      </main>
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
