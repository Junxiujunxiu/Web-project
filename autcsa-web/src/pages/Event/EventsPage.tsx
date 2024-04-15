import React from "react";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";
import EventList from "./Components/EventList";
import OngoingEvent from "./Components/OngoingEvent";

const EventsPage: React.FC = () => {
  return (
    <div className="font-home" id="events_page">
      <div className="events_header">
        <GlobalHeader currentPage="events" />
      </div>

      <div className="events_body">
        <OngoingEvent />
        <EventList />
      </div>
      <div className="events_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default EventsPage;
