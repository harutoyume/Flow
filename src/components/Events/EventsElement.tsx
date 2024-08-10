import React, { ChangeEvent, useState } from "react";
import EventsCard from "@/components/Events/EventsCard";

interface TableEvent {
  name: string;
  description: string;
  date: string;
}

const EventsElement = () => {
  const [tableEvents, setTableEvents] = useState<TableEvent[]>([]);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const isCreateButtonDisabled = !eventName || !eventDescription || !eventDate;

  const handleEventNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleEventDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventDescription(e.target.value);
  };

  const handleEventDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventDate(e.target.value);
  };

  const handleEventAddToTable = () => {
    setTableEvents((prevTableEvents) => [
      ...prevTableEvents,
      { name: eventName, description: eventDescription, date: eventDate },
    ]);
  };

  return (
    <EventsCard
      tableEvents={tableEvents}
      handleEventNameChange={handleEventNameChange}
      handleEventDescriptionChange={handleEventDescriptionChange}
      handleEventDateChange={handleEventDateChange}
      handleEventAddToTable={handleEventAddToTable}
      isCreateButtonDisabled={isCreateButtonDisabled}
    />
  );
};

export default EventsElement;
