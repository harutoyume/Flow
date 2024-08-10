import React, { ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EventsTable from "@/components/Events/EventsTable";
import EventsEventAddPopover from "@/components/Events/EventsEventAddPopover";

interface EventsCardProps {
  tableEvents: { name: string; description: string; date: string }[];
  handleEventNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventAddToTable: () => void;
  isCreateButtonDisabled: boolean;
  handleEventDeleteFromTable: (index: number) => void;
}

const EventsCard = ({
  tableEvents,
  handleEventNameChange,
  handleEventDescriptionChange,
  handleEventDateChange,
  handleEventAddToTable,
  isCreateButtonDisabled,
  handleEventDeleteFromTable,
}: EventsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-1.5">
          <CardTitle>Cобытия</CardTitle>
          <CardDescription>Список событий</CardDescription>
        </div>
        <div>
          <EventsEventAddPopover
            handleEventNameChange={handleEventNameChange}
            handleEventDescriptionChange={handleEventDescriptionChange}
            handleEventDateChange={handleEventDateChange}
            handleEventAddToTable={handleEventAddToTable}
            isCreateButtonDisabled={isCreateButtonDisabled}
          />
        </div>
      </CardHeader>
      <CardContent>
        <EventsTable
          tableEvents={tableEvents}
          handleEventDeleteFromTable={handleEventDeleteFromTable}
        />
      </CardContent>
    </Card>
  );
};

export default EventsCard;
