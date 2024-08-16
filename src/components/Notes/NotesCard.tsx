import React, { ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NotesNoteAddPopover from "@/components/Notes/NotesNoteAddPopover";
import NotesTable from "@/components/Notes/NotesTable";

interface NotesCardProps {
  notes: { name: string; content: string }[];
  handleNoteNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNoteAddToTable: () => void;
  handleNoteAddCancel: () => void;
  handleNoteDeleteFromTable: (index: number) => void;
}

const NotesCard = ({
  notes,
  handleNoteNameChange,
  handleNoteAddToTable,
  handleNoteAddCancel,
  handleNoteDeleteFromTable,
}: NotesCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-1.5">
          <CardTitle>Заметки</CardTitle>
          <CardDescription>Список заметок</CardDescription>
        </div>
        <div>
          <NotesNoteAddPopover
            handleNoteNameChange={handleNoteNameChange}
            handleNoteAddToTable={handleNoteAddToTable}
            handleNoteAddCancel={handleNoteAddCancel}
          />
        </div>
      </CardHeader>
      <CardContent>
        <NotesTable
          notes={notes}
          handleNoteDeleteFromTable={handleNoteDeleteFromTable}
        />
      </CardContent>
    </Card>
  );
};

export default NotesCard;
