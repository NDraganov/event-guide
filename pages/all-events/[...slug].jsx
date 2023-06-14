import ResultsIntro from "@/components/events-search/results-intro";
import EventsList from "@/components/events/events-list";
import { getFilteredByDateEvents } from "@/helpers/api-util";

export default function FilteredByDateEventsPage({ events, date }) {
  if (!events || events.lenght === 0) {
    return <p>No events found!</p>;
  }

  return (
    <main>
      <ResultsIntro date={date} />
      <EventsList eventsItems={events} />
    </main>
  );
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
    numYear > 2025 ||
    numYear < 2023 ||
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

  const date = new Date(numYear, numMonth - 1);

  return {
    props: {
      events: filteredEvents,
      date: JSON.parse(JSON.stringify(date)),
    },
  };
}
