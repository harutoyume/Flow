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
        {tableEvents.length ? (
          tableEvents.map((tableEvent, index) => (
            <TableRow key={index}>
              <TableCell>{tableEvent.name}</TableCell>
              <TableCell>{tableEvent.description}</TableCell>
              <TableCell>{tableEvent.date}</TableCell>
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
