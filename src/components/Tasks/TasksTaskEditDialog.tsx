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

interface TasksTaskEditDialogProps {
  setTasks: React.Dispatch<
    React.SetStateAction<{ description: string; checked: boolean }[]>
  >;
  tasks: { description: string; checked: boolean }[];
  index: number;
}

const TasksTaskEditDialog = ({
  setTasks,
  tasks,
  index,
}: TasksTaskEditDialogProps) => {
  const { toast } = useToast();
  const task = tasks.at(index);

  const [taskDescription, setTaskDescription] = useState(
    task?.description || "",
  );

  const handleTaskDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const handleTaskDataEdit = () => {
    const updateTasks = [...tasks];
    updateTasks[index].description = taskDescription;
    setTasks(updateTasks);
  };

  return (
    <DialogContent className="max-sm:max-w-sm">
      <DialogHeader>
        <DialogTitle>Редактировать задачу</DialogTitle>
        <DialogDescription>
          Вы можете изменить информацию о задаче и сохранить изменения.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Описание
          </Label>
          <Input
            id="description"
            defaultValue={task?.description || ""}
            className="col-span-3"
            onChange={handleTaskDescriptionChange}
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          onClick={() => {
            handleTaskDataEdit();
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

export default TasksTaskEditDialog;
