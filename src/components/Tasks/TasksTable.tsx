import { Text } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import TasksTaskMenu from "@/components/Tasks/TasksTaskMenu";

interface TasksTableProps {
  tasks: { description: string }[];
  handleTaskDeleteFromTable: (index: number) => void;
}

const TasksTable = ({ tasks, handleTaskDeleteFromTable }: TasksTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            {" "}
            <span className="flex items-center gap-x-1">
              <Text size={14} /> Задача
            </span>{" "}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.length ? (
          tasks.map((tableEvent, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-x-4">
                <Checkbox />
                {tableEvent.description}
              </TableCell>
              <TableCell className="text-right">
                <TasksTaskMenu
                  handleTaskDeleteFromTable={handleTaskDeleteFromTable}
                  index={index}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              Задачи отсутствуют
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TasksTable;
