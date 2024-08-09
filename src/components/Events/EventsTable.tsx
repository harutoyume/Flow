import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EventsTableProps {
  tableEvents: { name: string; description: string; date: string }[];
}

const EventsTable = ({ tableEvents }: EventsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cобытие</TableHead>
          <TableHead>Описание</TableHead>
          <TableHead>Дата</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableEvents.map((tableEvent, index) => (
          <TableRow key={index}>
            <TableCell>{tableEvent.name}</TableCell>
            <TableCell>{tableEvent.description}</TableCell>
            <TableCell>{tableEvent.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventsTable;
