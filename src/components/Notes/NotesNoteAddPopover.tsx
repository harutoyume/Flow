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

interface NotesNoteAddPopoverProps {
  handleNoteNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNoteAddToTable: () => void;
  handleNoteAddCancel: () => void;
}

const NotesNoteAddPopover = ({
  handleNoteNameChange,
  handleNoteAddCancel,
  handleNoteAddToTable,
}: NotesNoteAddPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-auto p-2">
          <Plus size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Новая заметка</h4>
            <p className="text-sm text-muted-foreground">
              Добавить новую заметку
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Название</Label>
              <Input
                id="name"
                placeholder="Введите название"
                className="col-span-2 h-8"
                onChange={handleNoteNameChange}
              />
            </div>
          </div>
          <div className="flex gap-x-1">
            <PopoverPrimitive.Close asChild>
              <Button onClick={handleNoteAddToTable}>Добавить</Button>
            </PopoverPrimitive.Close>
            <PopoverPrimitive.Close asChild>
              <Button onClick={handleNoteAddCancel} variant="outline">
                Отмена
              </Button>
            </PopoverPrimitive.Close>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotesNoteAddPopover;
