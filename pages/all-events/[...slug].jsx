import EventsList from "@/components/events/events-list";
import { getFilteredByDateEvents } from "@/helpers/api-util";

export default function FilteredByDateEventsPage({ events }) {
  if (!events || events.lenght === 0) {
    return <p>No events found!</p>;
  }
  return <EventsList eventsItems={events} />;
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredByDateEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
    },
  };
}
