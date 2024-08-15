import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TasksTaskEditDialog from "@/components/Tasks/TasksTaskEditDialog";

interface TasksTaskMenuProps {
  setTasks: React.Dispatch<
    React.SetStateAction<{ description: string; checked: boolean }[]>
  >;
  tasks: { description: string; checked: boolean }[];
  handleTaskDeleteFromTable: (index: number) => void;
  index: number;
}

const TasksTaskMenu = ({
  handleTaskDeleteFromTable,
  index,
  tasks,
  setTasks,
}: TasksTaskMenuProps) => {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto p-2">
            <Ellipsis size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Действия</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleTaskDeleteFromTable(index)}>
            Удалить задачу
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DialogTrigger>Редактировать задачу</DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TasksTaskEditDialog setTasks={setTasks} tasks={tasks} index={index} />
    </Dialog>
  );
};

export default TasksTaskMenu;
