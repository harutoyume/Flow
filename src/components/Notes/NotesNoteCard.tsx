import React, { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Notes {
  name: string;
  content: string;
}

interface NotesNoteCardProps {
  id: string | string[] | undefined;
}

const NotesNoteCard = ({ id }: NotesNoteCardProps) => {
  const [notes, setNotes] = useState<Notes[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes && storedNotes !== "[]") {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const index = Number(id);
    if (!isNaN(index) && index >= 0 && index < notes.length) {
      const updateNotes = [...notes];
      updateNotes[index] = { ...updateNotes[index], name: e.target.value };
      setNotes(updateNotes);
    }
  };

  const handleNoteContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const index = Number(id);
    if (!isNaN(index) && index >= 0 && index < notes.length) {
      const updateNotes = [...notes];
      updateNotes[index] = { ...updateNotes[index], content: e.target.value };
      setNotes(updateNotes);
    }
  };

  const index = Number(id);
  if (isNaN(index) || index < 0 || index >= notes.length || id === undefined) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <Input
          defaultValue={notes[index]?.name}
          placeholder="Заметка"
          onChange={handleNoteNameChange}
          className="h-auto p-0 border-background text-xl focus-visible:ring-background"
        />
      </CardHeader>
      <CardContent>
        <Textarea
          defaultValue={notes[index]?.content}
          onChange={handleNoteContentChange}
          className="min-h-80 p-0 border-background focus-visible:ring-background"
        />
      </CardContent>
    </Card>
  );
};

export default NotesNoteCard;
