import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import React from "react";

interface EventsEventMenuProps {
  handleEventDeleteFromTable: (index: number) => void;
  index: number;
}

const EventsEventMenu = ({
  handleEventDeleteFromTable,
  index,
}: EventsEventMenuProps) => {
  return (
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EventsEventMenu;
