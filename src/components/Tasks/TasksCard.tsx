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
  tasks: { description: string }[];
  handleTaskDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTaskAddToTable: () => void;
  isCreateButtonDisabled: boolean;
  handleTaskDeleteFromTable: (index: number) => void;
}

const TasksCard = ({
  tasks,
  handleTaskDescriptionChange,
  handleTaskAddToTable,
  isCreateButtonDisabled,
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
            isCreateButtonDisabled={isCreateButtonDisabled}
          />
        </div>
      </CardHeader>
      <CardContent>
        <TasksTable
          tasks={tasks}
          handleTaskDeleteFromTable={handleTaskDeleteFromTable}
        />
      </CardContent>
    </Card>
  );
};

export default TasksCard;
