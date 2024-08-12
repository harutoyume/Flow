import React from "react";
import { Calendar, Text, Clock3 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EventsEventMenu from "@/components/Events/EventsEventMenu";

interface EventsTableProps {
  tableEvents: { name: string; description: string; date: string }[];
  handleEventDeleteFromTable: (index: number) => void;
}

const EventsTable = ({
  tableEvents,
  handleEventDeleteFromTable,
}: EventsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            {" "}
            <span className="flex items-center gap-x-1">
              <Calendar size={14} /> Cобытие
            </span>{" "}
          </TableHead>
          <TableHead>
            {" "}
            <span className="flex items-center gap-x-1">
              <Text size={14} /> Описание
            </span>{" "}
          </TableHead>
          <TableHead>
            {" "}
            <span className="flex items-center gap-x-1">
              <Clock3 size={14} /> Дата
            </span>{" "}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableEvents.length ? (
          tableEvents.map((tableEvent, index) => (
            <TableRow key={index}>
              <TableCell>{tableEvent.name}</TableCell>
              <TableCell>{tableEvent.description}</TableCell>
              <TableCell>{tableEvent.date}</TableCell>
              <TableCell>
                <EventsEventMenu
                  handleEventDeleteFromTable={handleEventDeleteFromTable}
                  index={index}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              События отсутствуют
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default EventsTable;
