import React, { ChangeEvent, useState, useEffect } from "react";
import NotesCard from "@/components/Notes/NotesCard";

interface Notes {
  name: string;
  content: string;
}

const NotesElement = () => {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [noteName, setNoteName] = useState("");
  const [noteContent, setNoteContent] = useState("");

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
    setNoteName(e.target.value);
  };

  const handleNoteAddToTable = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { name: noteName, content: noteContent },
    ]);
    setNoteName("");
  };

  const handleNoteAddCancel = () => {
    setNoteName("");
  };

  const handleNoteDeleteFromTable = (index: number) => {
    setNotes((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <NotesCard
      notes={notes}
      handleNoteNameChange={handleNoteNameChange}
      handleNoteAddToTable={handleNoteAddToTable}
      handleNoteAddCancel={handleNoteAddCancel}
      handleNoteDeleteFromTable={handleNoteDeleteFromTable}
    />
  );
};

export default NotesElement;
