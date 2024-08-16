import { File, Folder } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import NotesNoteMenu from "@/components/Notes/NotesNoteMenu";
import { useRouter } from "next/router";

interface NotesTableProps {
  notes: { name: string; content: string }[];
  handleNoteDeleteFromTable: (index: number) => void;
}

const NotesTable = ({ notes, handleNoteDeleteFromTable }: NotesTableProps) => {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            {" "}
            <span className="flex items-center gap-x-1">
              <Folder size={14} /> Заметка
            </span>{" "}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notes.length ? (
          notes.map((note, index) => (
            <TableRow key={index}>
              <TableCell
                className="flex items-center gap-x-2"
                onClick={() => router.push(`/notes/${index}`)}
              >
                <File size={16} /> {note.name === "" ? <>Заметка</> : note.name}
              </TableCell>
              <TableCell className="text-right">
                <NotesNoteMenu
                  handleNoteDeleteFromTable={handleNoteDeleteFromTable}
                  index={index}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              Заметки отсутствуют
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default NotesTable;
