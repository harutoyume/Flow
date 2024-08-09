import React, { ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EventsTable from "@/components/Events/EventsTable";
import EventsAddPopover from "@/components/Events/EventsAddPopover";

interface EventsCardProps {
  tableEvents: { name: string; description: string; date: string }[];
  handleEventNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventAddToTable: () => void;
}

const EventsCard = ({
  tableEvents,
  handleEventNameChange,
  handleEventDescriptionChange,
  handleEventDateChange,
  handleEventAddToTable,
}: EventsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-1.5">
          <CardTitle>Cобытия</CardTitle>
          <CardDescription>Список событий</CardDescription>
        </div>
        <div>
          <EventsAddPopover
            handleEventNameChange={handleEventNameChange}
            handleEventDescriptionChange={handleEventDescriptionChange}
            handleEventDateChange={handleEventDateChange}
            handleEventAddToTable={handleEventAddToTable}
          />
        </div>
      </CardHeader>
      <CardContent>
        <EventsTable tableEvents={tableEvents} />
      </CardContent>
    </Card>
  );
};

export default EventsCard;
