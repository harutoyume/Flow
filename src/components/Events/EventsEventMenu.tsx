import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EventsEventEditDialog from "@/components/Events/EventsEventEditDialog";
import React from "react";

interface EventsEventMenuProps {
  tableEvents: { name: string; description: string; date: string }[];
  setTableEvents: React.Dispatch<
    React.SetStateAction<{ name: string; description: string; date: string }[]>
  >;
  handleEventDeleteFromTable: (index: number) => void;
  index: number;
}

const EventsEventMenu = ({
  tableEvents,
  setTableEvents,
  handleEventDeleteFromTable,
  index,
}: EventsEventMenuProps) => {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto p-2">
            <Ellipsis size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Действия</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleEventDeleteFromTable(index)}>
            Удалить событие
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DialogTrigger>Редактировать событие</DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EventsEventEditDialog
        tableEvents={tableEvents}
        setTableEvents={setTableEvents}
        index={index}
      />
    </Dialog>
  );
};

export default EventsEventMenu;
