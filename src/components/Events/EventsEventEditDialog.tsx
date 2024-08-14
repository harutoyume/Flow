import React, { ChangeEvent, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface EventsEventEditDialogProps {
  setTableEvents: React.Dispatch<
    React.SetStateAction<{ name: string; description: string; date: string }[]>
  >;
  tableEvents: { name: string; description: string; date: string }[];
  index: number;
}

const EventsEventEditDialog = ({
  tableEvents,
  index,
  setTableEvents,
}: EventsEventEditDialogProps) => {
  const { toast } = useToast();
  const tableEvent = tableEvents.at(index);

  const [eventName, setEventName] = useState(tableEvent?.name || "");
  const [eventDescription, setEventDescription] = useState(
    tableEvent?.description || "",
  );
  const [eventDate, setEventDate] = useState(tableEvent?.date || "");

  const handleEventNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleEventDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventDescription(e.target.value);
  };

  const handleEventDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEventDate(e.target.value);
  };

  const handleEventDataEdit = () => {
    const updateTableEvents = [...tableEvents];
    updateTableEvents[index].name = eventName;
    updateTableEvents[index].description = eventDescription;
    updateTableEvents[index].date = eventDate;
    setTableEvents(updateTableEvents);
  };

  return (
    <DialogContent className="max-sm:max-w-sm">
      <DialogHeader>
        <DialogTitle>Редактировать событие</DialogTitle>
        <DialogDescription>
          Вы можете изменить информацию о событии и сохранить изменения.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Название
          </Label>
          <Input
            id="name"
            defaultValue={tableEvent?.name || ""}
            className="col-span-3"
            onChange={handleEventNameChange}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Описание
          </Label>
          <Input
            id="description"
            defaultValue={tableEvent?.description || ""}
            className="col-span-3"
            onChange={handleEventDescriptionChange}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="date" className="text-right">
            Дата
          </Label>
          <Input
            id="date"
            defaultValue={tableEvent?.date || ""}
            className="col-span-3"
            onChange={handleEventDateChange}
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          onClick={() => {
            handleEventDataEdit();
            toast({
              description: "Изменения сохранены.",
            });
          }}
        >
          Сохранить изменения
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EventsEventEditDialog;
