import React, { ChangeEvent } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface EventsAddPopoverProps {
  handleEventNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEventAddToTable: () => void;
  isCreateButtonDisabled: boolean;
}

const EventsAddPopover = ({
  handleEventNameChange,
  handleEventDescriptionChange,
  handleEventDateChange,
  handleEventAddToTable,
  isCreateButtonDisabled,
}: EventsAddPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-auto p-2">
          <Plus size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 inter-font">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Новое событие</h4>
            <p className="text-sm text-muted-foreground">
              Добавить новое событие в список
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Название</Label>
              <Input
                id="name"
                placeholder="Введите название"
                className="col-span-2 h-8"
                onChange={handleEventNameChange}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="description">Описание</Label>
              <Input
                id="description"
                placeholder="Введите описание"
                className="col-span-2 h-8"
                onChange={handleEventDescriptionChange}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="date">Дата</Label>
              <Input
                id="date"
                placeholder="Введите дату"
                className="col-span-2 h-8"
                onChange={handleEventDateChange}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <PopoverPrimitive.Close asChild>
              <Button
                onClick={handleEventAddToTable}
                disabled={isCreateButtonDisabled}
              >
                Добавить
              </Button>
            </PopoverPrimitive.Close>
            <PopoverPrimitive.Close asChild>
              <Button variant="outline">Отмена</Button>
            </PopoverPrimitive.Close>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventsAddPopover;
