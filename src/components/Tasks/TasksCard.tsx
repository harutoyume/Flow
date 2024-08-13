import React, { ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TasksTable from "@/components/Tasks/TasksTable";
import TasksTaskAddPopover from "@/components/Tasks/TasksTaskAddPopover";

interface EventsCardProps {
  tasks: { description: string; checked: boolean }[];
  handleTaskDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTaskAddToTable: () => void;
  handleTaskAddCancel: () => void;
  isCreateButtonDisabled: boolean;
  handleTaskDeleteFromTable: (index: number) => void;
  handleTaskCheck: (index: number) => void;
}

const TasksCard = ({
  tasks,
  handleTaskDescriptionChange,
  handleTaskAddToTable,
  handleTaskAddCancel,
  isCreateButtonDisabled,
  handleTaskCheck,
  handleTaskDeleteFromTable,
}: EventsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-1.5">
          <CardTitle>Задачи</CardTitle>
          <CardDescription>Список задач</CardDescription>
        </div>
        <div>
          <TasksTaskAddPopover
            handleTaskDescriptionChange={handleTaskDescriptionChange}
            handleTaskAddToTable={handleTaskAddToTable}
            handleTaskAddCancel={handleTaskAddCancel}
            isCreateButtonDisabled={isCreateButtonDisabled}
          />
        </div>
      </CardHeader>
      <CardContent>
        <TasksTable
          tasks={tasks}
          handleTaskDeleteFromTable={handleTaskDeleteFromTable}
          handleTaskCheck={handleTaskCheck}
        />
      </CardContent>
    </Card>
  );
};

export default TasksCard;
