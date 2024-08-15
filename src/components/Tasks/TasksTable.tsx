import { Square } from "lucide-react";
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
import React from "react";

interface TasksTableProps {
  tasks: { description: string; checked: boolean }[];
  setTasks: React.Dispatch<
    React.SetStateAction<{ description: string; checked: boolean }[]>
  >;
  handleTaskDeleteFromTable: (index: number) => void;
  handleTaskCheck: (index: number) => void;
}

const TasksTable = ({
  tasks,
  setTasks,
  handleTaskDeleteFromTable,
  handleTaskCheck,
}: TasksTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            {" "}
            <span className="flex items-center gap-x-1">
              <Square size={14} /> Задача
            </span>{" "}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.length ? (
          tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-x-4">
                <Checkbox
                  onCheckedChange={() => handleTaskCheck(index)}
                  defaultChecked={task.checked}
                />
                {task.description}
              </TableCell>
              <TableCell className="text-right">
                <TasksTaskMenu
                  setTasks={setTasks}
                  tasks={tasks}
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
